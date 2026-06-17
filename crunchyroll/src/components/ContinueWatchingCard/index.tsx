import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface PropsContinueWatchingCard {
  id: number;
  seriesTitle: string;
  episodeTitle: string;
  timeLeft: string;
  progress: number; // 0 to 1
  image: any;
  onPress: (id: number) => void;
}

export const ContinueWatchingCard = ({
  id,
  seriesTitle,
  episodeTitle,
  timeLeft,
  progress,
  image,
  onPress,
}: PropsContinueWatchingCard) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)} activeOpacity={0.85}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      {/* Overlay escuro */}
      <View style={styles.overlay} />

      {/* Barra de progresso */}
      <View style={styles.progressBarTrack}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* Info no topo direito */}
      <TouchableOpacity style={styles.moreButton} onPress={() => onPress(id)}>
        <Text style={styles.moreIcon}>⋮</Text>
      </TouchableOpacity>

      {/* Info na parte inferior */}
      <View style={styles.infoContainer}>
        <Text style={styles.seriesTitle}>{seriesTitle}</Text>
        <Text style={styles.episodeTitle}>{episodeTitle}</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.playButton} onPress={() => onPress(id)}>
            <Text style={styles.playIcon}>▶</Text>
            <Text style={styles.playLabel}>CONTINUE WATCHING</Text>
          </TouchableOpacity>
          <Text style={styles.timeLeft}>{timeLeft}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};