import React, { useState } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { styles } from './style';
import { SectionTitle } from '../../components/SectionTitle';
import { AnimeCard } from '../../components/AnimeCard';
import { ContinueWatchingCard } from '../../components/ContinueWatchingCard';
import { TOP_PICKS, DRAGON_BALL, CONTINUE_WATCHING } from '../../data';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const BOTTOM_TABS = [
  { id: 'home',       label: 'Home',       icon: 'home'             },
  { id: 'lists',      label: 'My Lists',   icon: 'bookmark-outline' },
  { id: 'browse',     label: 'Browse',     icon: 'grid-outline'     },
  { id: 'simulcasts', label: 'Simulcasts', icon: 'tv-outline'       },
  { id: 'account',    label: 'Account',    icon: 'person-circle'    },
];

export const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  function handleAnimePress(id: number) {
    console.log('Anime pressionado, id:', id);
  }

  function handleContinuePress(id: number) {
    console.log('Continue watching pressionado, id:', id);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* ── HEADER ── */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Crunchyroll-Logo.png')}
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIconButton}>
                 <MaterialIcons name={"connected-tv" as any} size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
                 <Ionicons name={"search-outline" as any} size={22} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
      </View>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SectionTitle title="TOP PICKS FOR YOU" />
        <FlatList
          data={TOP_PICKS}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <AnimeCard
              id={item.id}
              title={item.title}
              type={item.type}
              image={item.image}
              onPress={handleAnimePress}
            />
          )}
        />

        <FlatList
          data={CONTINUE_WATCHING}
          keyExtractor={(item) => String(item.id)}
          scrollEnabled={false}
          contentContainerStyle={styles.continueWatchingList}
          renderItem={({ item }) => (
            <ContinueWatchingCard
              id={item.id}
              seriesTitle={item.seriesTitle}
              episodeTitle={item.episodeTitle}
              timeLeft={item.timeLeft}
              progress={item.progress}
              image={item.image}
              onPress={handleContinuePress}
            />
          )}
        />

        <SectionTitle title="DRAGON BALL MOVIES" />
        <FlatList
          data={DRAGON_BALL}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <AnimeCard
              id={item.id}
              title={item.title}
              type={item.type}
              image={item.image}
              onPress={handleAnimePress}
            />
          )}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* ── BOTTOM TAB BAR ── */}
      <View style={styles.bottomTabBar}>
        {BOTTOM_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.id)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={tab.icon as any}
                size={22}
                color={isActive ? '#F47521' : '#888888'}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};