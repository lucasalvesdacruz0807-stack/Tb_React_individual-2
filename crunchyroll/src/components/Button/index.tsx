import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

interface PropsButton {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'text';
}

export const Button = ({ label, onPress, variant = 'primary' }: PropsButton) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outline' && styles.buttonOutline,
        variant === 'text' && styles.buttonText,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.label,
          variant === 'outline' && styles.labelOutline,
          variant === 'text' && styles.labelText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};