import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },


  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 14,
  paddingTop: 14,
  paddingBottom: 10,
  backgroundColor: '#000000',
  },
  headerLogo: {
    flex: 1,
    width: 300,
    height: 80,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerIconButton: {
    padding: 8,
  },
  headerIconText: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },

  horizontalList: {
    paddingRight: 14,
  },
  continueWatchingList: {
    marginTop: 20,
    marginBottom: 4,
    gap: 12,
  },

  bottomSpacing: {
    height: 20,
  },

  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: '#111111',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingBottom: 20,
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 10,
    color: '#888888',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#F47521',
    fontWeight: '700',
  },
});