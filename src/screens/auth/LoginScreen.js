const {useColorScheme, View, Text, StyleSheet} = require('react-native');
const {Colors} = require('react-native/Libraries/NewAppScreen');

export const LoginScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <View style={[styles.root, backgroundStyle]}>
      <Text
        style={textStyle}
        onPress={() => {
          navigation.navigate('main');
        }}>
        Login Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
