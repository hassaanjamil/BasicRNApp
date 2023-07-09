import {useEffect, useState} from 'react';
import {
  IMAGES_BASE_URL,
  getPopularMovies,
  getUpcomingMovies,
} from '../../data/network/ApiServices';
import {ImageSlider} from '../../components/ImageSlider';
import {CarouselSection} from '../../components/CarouselSection';

const {
  useColorScheme,
  View,
  Text,
  StyleSheet,
  ScrollView,
} = require('react-native');
const {Colors} = require('react-native/Libraries/NewAppScreen');

export const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    // fetching upcoming movies and updating state of upcomingMovies and upcomingMovieImages
    getUpcomingMovies()
      .then(data => {
        const movies = data;
        const movieImages = [];
        movies.forEach(movie => {
          const imageUrl = `${IMAGES_BASE_URL}${movie.poster_path}`;
          movieImages.push(imageUrl);
        });
        setUpcomingMovies(movies);
        setSliderImages(movieImages);
      })
      .catch(error => {
        console.log(error);
      });

    // fetching popular movies and updating popularMovies state
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, [navigation]);

  return (
    <ScrollView
      style={[styles.root, backgroundStyle]}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.sliderContainer}>
        <ImageSlider data={sliderImages} />
      </View>
      <View style={styles.horizontalListSectionContainer}>
        <CarouselSection title="Upcoming Movies" content={upcomingMovies} />
      </View>
      <View style={styles.horizontalListSectionContainer}>
        <CarouselSection title="Popular Movies" content={popularMovies} />
      </View>
      {/* <CarouselSection title="Popular Movies" content={popularMovies} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  sliderContainer: {
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
  },
  horizontalListSectionContainer: {
    marginTop: 20,
  },
});
