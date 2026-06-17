import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

interface PropsSectionTitle {
  title: string;
}

export const SectionTitle = ({ title }: PropsSectionTitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};