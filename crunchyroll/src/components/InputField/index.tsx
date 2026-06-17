import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';

interface PropsInputField {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  hint?: string;
}

export const InputField = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  keyboardType = 'default',
  hint,
}: PropsInputField) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused && styles.labelFocused]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#555"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
};