import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 160,
    marginLeft: 14,
    backgroundColor: '#1A1A1A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 210,
  },
  info: {
    padding: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  type: {
    color: '#F47521',
    fontSize: 12,
    fontWeight: '500',
  },
  moreButton: {
    padding: 4,
  },
  moreIcon: {
    color: '#AAAAAA',
    fontSize: 18,
    fontWeight: '700',
  },
});