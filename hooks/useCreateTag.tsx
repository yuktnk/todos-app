import { useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { db } from '../firebaseConfig';
import { RootStackParamList } from '../types/types';
import { selectUser } from '../slices/userSlice';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>;
};

export const useCreateTag = ({ navigation }: Props) => {
  const user = useSelector(selectUser);
  const [name, setName] = useState('');
  const [createError, setCreateError] = useState('');

  const createTag = async () => {
    if (name !== '') {
      setCreateError('');
      try {
        await addDoc(collection(db, 'users', user.uid, 'tags'), {
          name,
          createdAt: serverTimestamp(),
        });
        setName('');
        navigation.goBack();
      } catch (error: any) {
        setName('');
        setCreateError(error.message);
      }
    }
  };

  return {
    name,
    setName,
    createError,
    createTag,
  };
};
