import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { Text, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { auth } from '../firebaseConfig';
import { selectUser, logout } from '../slices/userSlice';
import { IconButton } from '../components/IconButton';
import { Title } from '../components/Title';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>;
};

export const TagListScreen: FC<Props> = ({ navigation }) => {
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
    <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
      <Title firstText="Tag" lastText="List" />
      <TouchableOpacity
        style={tw('mt-2')}
        onPress={() => navigation.navigate('CreateTag')}
      >
        <MaterialCommunityIcons name="tag-plus" size={40} color="#5f9ea0" />
      </TouchableOpacity>
      <Text>{user.email}</Text>
      <IconButton name="logout" size={20} color="blue" onPress={signOut} />
    </SafeAreaView>
  );
};
