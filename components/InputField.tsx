import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  leftIcon: any;
  iconColor?: string;
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'email-address' | 'default';
  textContentType?: 'emailAddress' | 'password' | 'name';
  autoFocus?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export const InputField: FC<Props> = ({
  leftIcon,
  iconColor = 'gray',
  placeholder,
  placeholderTextColor = 'gray',
  secureTextEntry = false,
  keyboardType = 'default',
  textContentType = 'name',
  autoFocus = false,
  value,
  onChangeText,
}) => {
  return (
    <View style={tw('mb-5 mx-3 flex-row p-3 w-11/12 bg-white rounded')}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={tw('mr-3')}
        />
      ) : null}
      <TextInput
        style={tw('w-full')}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        autoCapitalize="none"
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};
