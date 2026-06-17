import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // ── HEADER ──
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1717',
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  closeIcon: {
    color: '#FFFFFF',
    fontSize: 25,
    width: 36,
    textAlign: 'center',
    paddingLeft: 25,
  },
  logo: {
    width: 300,
    height: 100,
    left: -28,
  },
  placeholder: {
    width: 36,
  },

  // ── CONTEÚDO ──
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 48,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 48,
    letterSpacing: 0.3,
  },

  // ── TERMOS ──
  terms: {
    marginTop: 48,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 13,
    paddingHorizontal: 8,
  },
  termsLink: {
    color: '#F47521',
    textDecorationLine: 'underline',
  },
});