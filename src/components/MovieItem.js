import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const MovieItem = ({movie}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <View style={[styles.root, backgroundStyle]}>
      <Text style={textStyle}>{movie?.title ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 3,
    backgroundColor: 'blue',
  },
});
