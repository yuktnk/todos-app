import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { View, Text } from 'react-native';

type Props = {
  firstText: string;
  lastText: string;
};

export const Title: FC<Props> = ({ firstText, lastText }) => {
  return (
    <View style={tw('flex-row my-6 px-1')}>
      <View
        style={
          (tw('flex-1 mr-1 border self-cneter'), { borderColor: '#5f9ea0' })
        }
      />
      <Text style={tw('text-gray-700 text-3xl font-extrabold')}>
        {`${firstText} `}
        <Text style={(tw('font-light'), { color: '#5f9ea0' })}>{lastText}</Text>
      </Text>
      <View
        style={
          (tw('flex-1 mr-1 border self-cneter'), { borderColor: '#5f9ea0' })
        }
      />
    </View>
  );
};
