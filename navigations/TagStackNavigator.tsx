import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import type { RootStackParamList } from '../types/types';

import { auth } from '../firebaseConfig';
import { TagListScreen } from '../screens/TagListScreen';
import { CreateTagScreen } from '../screens/CreateTagScreen';
import { IconButton } from '../components/IconButton';
import { selectUser, logout } from '../slices/userSlice';
import { TaskStackNavigator } from './TaskStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch {
      Alert.alert('Logout error');
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTitle: user.email,
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          headerRight: () => (
            <View style={tw('mr-3')}>
              <IconButton
                name="logout"
                size={20}
                color="white"
                onPress={signOut}
              />
            </View>
          ),
        }}
      >
        <Stack.Screen name="TagList" component={TagListScreen} />
        <Stack.Screen name="TaskStack" component={TaskStackNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="CreateTag" component={CreateTagScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
