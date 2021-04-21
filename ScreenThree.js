import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const ScreenThree = props => {

    const [movie, setMovie] = useState([]);
    
    useEffect(() => {

        const getMovies = async (imdbID) => {

            // Fetching for the meta data
            // My ApiKey: 1f6ffac9
            // http://www.omdbapi.com/?i=<imdbID>&apikey=1f6ffac9
            // Example: http://www.omdbapi.com/?i=tt0076759&apikey=1f6ffac9

            let apiKey = "1f6ffac9";

            let search =  "http://www.omdbapi.com/?i=" + imdbID + "&apikey=" + apiKey;
            
            const responseMovies = await fetch(search);
                    
            const result_movie = await responseMovies.json();

            setMovie(result_movie);
        };

        getMovies(props.route.params.imdbID);

    }, []);

    return (
        <View>
            <ScrollView>  
                <View style = {styles.movie_container}>
                    <Image source = {{ uri: movie.Poster }} style = {{ width: 330, height: 500 }}/>
                    <Text>Title: {movie.Title}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Year: {movie.Year}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Rated: {movie.Rated}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Released: {movie.Released}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Runtime: {movie.Runtime}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Genre: {movie.Genre}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Director: {movie.Director}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Writer: {movie.Writer}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Actors: {movie.Actors}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Plot: {movie.Plot}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Language: {movie.Language}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Country: {movie.Country}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Awards: {movie.Awards}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Metascore: {movie.Metascore}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>imdbRating: {movie.imdbRating}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>imdbVotes: {movie.imdbVotes}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>imdbID: {movie.imdbID}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Type: {movie.Type}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>DVD: {movie.DVD}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>BoxOffice: {movie.BoxOffice}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Production: {movie.Production}</Text>
                    <View style = { {marginBottom: 15} }></View>
                    <Text>Website: {movie.Website}</Text>
                </View>  
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      movie_container: {
          flex: 1,
          alignItems: 'center',
          marginBottom: 20
      }
});

export default ScreenThree;