import {FlatList, StyleSheet, View, useColorScheme} from 'react-native';
import {Text} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MovieItem} from './MovieItem';

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
      <View>
        <FlatList
          data={content}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <MovieItem item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  titleContainer: {
    marginStart: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
