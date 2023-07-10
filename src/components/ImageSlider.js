import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export const ImageSlider = ({data}) => {
  return (
    <View style={styles.root}>
      <View style={styles.gradientOverlay} />
      <Text style={styles.caption}>Your Image Caption Here</Text>
      <SliderBox
        images={data}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={Dimensions.get('screen').height / 1.5}
        dotStyle={styles.dotStyle}
        disableOnPress={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
  },
  dotStyle: {
    height: 0,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // You can adjust the opacity and color values as per your preference
    // For example, 'rgba(0, 0, 0, 0.6)' for a darker overlay
  },
  caption: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
