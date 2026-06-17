import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface PropsAnimeCard {
  id: number;
  title: string;
  type: string;
  image: any;
  onPress: (id: number) => void;
}

export const AnimeCard = ({ id, title, type, image, onPress }: PropsAnimeCard) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)} activeOpacity={0.85}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.type}>{type}</Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => onPress(id)}>
            <Text style={styles.moreIcon}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};