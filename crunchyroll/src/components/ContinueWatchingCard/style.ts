import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    borderRadius: 4,
    overflow: 'hidden',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  progressBarTrack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#444444',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#F47521',
  },
  moreButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
  },
  moreIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 12,
    left: 14,
    right: 14,
  },
  seriesTitle: {
    color: '#CCCCCC',
    fontSize: 13,
    marginBottom: 2,
  },
  episodeTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    lineHeight: 24,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  playIcon: {
    color: '#F47521',
    fontSize: 18,
  },
  playLabel: {
    color: '#F47521',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  timeLeft: {
    color: '#CCCCCC',
    fontSize: 12,
  },
});