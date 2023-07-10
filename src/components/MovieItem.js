import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IMAGES_BASE_URL} from '../data/network/ApiServices';

export const MovieItem = ({item, index}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.backgroundColor,
    marginStart: index === 0 ? 20 : 0,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <View style={[styles.root, backgroundStyle]}>
      <View style={styles.innerView}>
        <View style={styles.imageContainer}>
          <Image
            src={`${IMAGES_BASE_URL}${item.poster_path}`}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    shadowColor: Colors.darker,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 8,
    marginEnd: 10,
  },
  innerView: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 120,
    height: 220,
  },
});
