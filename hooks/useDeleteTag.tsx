import { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../firebaseConfig';
import { selectUser } from '../slices/userSlice';

export const useDeleteTag = () => {
  const user = useSelector(selectUser);
  const [deleteError, setDeleteError] = useState('');

  const deleteTag = async (id: string) => {
    setDeleteError('');
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'tags', id));
    } catch (error: any) {
      setDeleteError(error.message);
    }
  };

  return {
    deleteTag,
    deleteError,
  };
};
