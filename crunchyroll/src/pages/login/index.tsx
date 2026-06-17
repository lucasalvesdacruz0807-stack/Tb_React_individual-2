import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from '../../routers/navigation';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';

import { styles } from './style';

type Props = NativeStackScreenProps<
  ParametrosRotasStack,
  'StackLogin'
>;

export const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.closeIcon}>✕</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/Crunchyroll-Logo.png')}
        style={styles.logo}
        resizeMode="contain"
       />
  
      <View style={styles.placeholder} />
    </View>

      <View style={styles.content}>
        <Text style={styles.title}>Criar Conta</Text>

        <InputField
          label="Endereço de E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <InputField
          label="Criar Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          hint="Mínimo de 6 caracteres, sem espaços em branco"
        />

        <Button
          label="Criar Conta"
          variant="outline"
          onPress={() => navigation.navigate('StackHome')}
        />

        <Button
          label="Voltar"
          variant="text"
          onPress={() => {}}
        />

        <Text style={styles.terms}>
          Ao criar uma conta, você concorda com nossos{' '}
        <Text style={styles.termsLink}>Termos de Uso</Text>
           {' '}e nossa{' '}
        <Text style={styles.termsLink}>Política de Privacidade</Text>
            {' '}e confirma que tem pelo menos 18 anos de idade.
        </Text>
      </View>
    </View>
  );
};