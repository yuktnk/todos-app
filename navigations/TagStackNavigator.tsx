import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/types';
import { TagListScreen } from '../screens/TagListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TagList" component={TagListScreen} />
    </Stack.Navigator>
  );
};
