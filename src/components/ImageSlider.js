import {View, StyleSheet, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export const ImageSlider = ({data}) => {
  console.log(data);
  return (
    <View style={styles.root}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: 0,
  },
});
