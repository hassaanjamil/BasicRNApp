import {FlatList, StyleSheet, View, useColorScheme} from 'react-native';
import {Text} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MovieItem} from './MovieItem';
import {useEffect} from 'react';

export const CarouselSection = ({title, content}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <View style={[styles.root, backgroundStyle]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={content}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MovieItem movie={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: '25%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  titleContainer: {},
  contentContainer: {
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
