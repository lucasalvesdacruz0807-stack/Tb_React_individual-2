import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#F47521',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#555555',
  },
  buttonText: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  labelOutline: {
    color: '#AAAAAA',
  },
  labelText: {
    color: '#F47521',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});