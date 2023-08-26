import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useFirabaseAuth } from '../hooks/useFirebaseAuth';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { InputField } from '../components/InputField';

export const AuthScreen: FC = () => {
  const {
    isLogin,
    email,
    password,
    authError,

    login,
    register,
    setEmail,
    setPassword,
    toggleMode,
  } = useFirabaseAuth();

  return (
    <View
      style={(tw('flex-1 pt-16 items-center'), { backgroundColor: '#008b8b' })}
    >
      <FontAwesome name="tasks" size={50} color="whtie" />
      <Text style={tw('text-2xl text-white font-semibold mt-2 mb-5')}>
        {isLogin ? 'Login' : 'SignUp'}
      </Text>
      <InputField
        leftIcon="email"
        placeholder="Enter email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <InputField
        leftIcon="lock"
        placeholder="Enter password"
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      {authError !== '' && (
        <Text style={tw('text-ywllow-300 my-3 font-semibold')}>
          {authError}
        </Text>
      )}
      <Button
        onPress={isLogin ? login : register}
        title={isLogin ? 'Login' : 'Register'}
      />
      <Text style={tw('text-white mb-3 text-base')}>
        {isLogin ? 'Create new account ?' : 'Login ?'}
      </Text>
      <IconButton name="retweet" size={24} color="#fff" onPress={toggleMode} />
    </View>
  );
};