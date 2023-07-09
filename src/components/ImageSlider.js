import {View, StyleSheet, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export const ImageSlider = ({data}) => {
  return (
    <SliderBox
      images={data}
      autoplay={true}
      circleLoop={true}
      sliderBoxHeight={Dimensions.get('screen').height / 1.5}
      dotStyle={styles.dotStyle}
      disableOnPress={true}
    />
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    height: 0,
  },
});
