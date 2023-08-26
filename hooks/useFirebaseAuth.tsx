import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useFirabaseAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [authError, setAuthError] = useState('');

  const login = async () => {
    try {
      setAuthError('');
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      setAuthError('');
      setEmail('');
      setPassword('');
    }
  };

  const register = async () => {
    try {
      setAuthError('');
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      setAuthError('');
      setEmail('');
      setPassword('');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setAuthError('');
  };

  return {
    isLogin,
    email,
    password,
    authError,

    login,
    register,
    setEmail,
    setPassword,
    toggleMode,
  };
};
