import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { Text, Alert, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { auth } from '../firebaseConfig';
import { selectUser, logout } from '../slices/userSlice';
import { IconButton } from '../components/IconButton';

export const TagListScreen: FC = () => {
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
      <Text>{user.email}</Text>
      <IconButton name="logout" size={20} color="blue" onPress={signOut} />
    </SafeAreaView>
  );
};
