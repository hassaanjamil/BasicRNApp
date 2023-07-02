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
  const [upcomingMovieImages, setUpcomingMoviesImages] = useState([]);

  useEffect(() => {
    // fetching upcoming movies and updating state of upcomingMovies and upcomingMovieImages
    getUpcomingMovies()
      .then(movies => {
        setUpcomingMovies(movies);

        const upcomMovieImages = [];
        upcomingMovies.forEach(movie => {
          const imageUrl = `${IMAGES_BASE_URL}${movie.poster_path}`;
          upcomMovieImages.push(imageUrl);
        });
        setUpcomingMoviesImages(upcomMovieImages);
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
    <ScrollView style={[styles.root, backgroundStyle]}>
      <View style={styles.contentContainer}>
        <ImageSlider data={upcomingMovieImages} />
        <CarouselSection title="Upcoming Movies" content={upcomingMovies} />
        <CarouselSection title="Popular Movies" content={popularMovies} />

        {/* <Text style={textStyle}>{`${
          popularMovies[0]?.original_title ?? ''
        }`}</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {},
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
});
