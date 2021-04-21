import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput, FlatList, Image} from 'react-native';

class ScreenTwo extends React.Component {
    
	constructor(props){
		super(props)
		this.state = {
          movieTitle: props.route.params.movieTitle,
		  dataSource: [],
          currentMovies: [],
          input: ''
		}
	 }

	async componentDidMount() {
        
        // Fetching for the basic information of the movies
        // My ApiKey: 1f6ffac9
        // Example: when searching "Star" 
        // http://www.omdbapi.com/?apikey=1f6ffac9&s=Star
        // const responseMovies = await fetch("http://www.omdbapi.com/?apikey=1f6ffac9&s=Star");

        let apiKey = "1f6ffac9";
        
        let search =  "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + this.state.movieTitle;
        const responseMovies = await fetch(search);
                
        const result_movies = await responseMovies.json();

        // save the result of movies
        this.setState({dataSource: result_movies.Search})

        // save the result of movies
        this.setState({currentMovies: result_movies.Search})
    }

    renderItem = ({ item }) => {
        return (
            <View style = {{ flex: 1, alignItems: 'center'}}>
                <Image source = {{ uri:item.Poster }} style = {{ width: 200, height: 250 }}/>
                <Text>Title: {item.Title}</Text>
                <Text>Type: {item.Type}</Text>
                <Text>Year: {item.Year}</Text>
                <Button title="More Details" onPress={() => this.props.navigation.navigate('ScreenThree', {imdbID: item.imdbID})}/>
            </View>
        )
    }
	
    renderSeparator = () => {
        return (
            <View 
                style = {{
                    height: 3, width: '100%', backgroundColor: 'black', marginBottom: 15
                }}>
            </View>
        )
    }

    searchMovie(search_input) {
        console.log("Searching...")

        var newArray = this.state.dataSource.filter(function (elem) {
            return (elem.Title).includes(search_input) 
          });

        // update the result of movies
        this.setState({currentMovies: newArray})
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
            <View style = {{ flex: 1, alignItems: 'center'}}>
                <View style = { {marginBottom: 15} }></View>
                <TextInput
                    style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Enter the movie keyword..." 
                    onChangeText={text => this.setState({input: text})}
                    value={this.state.input}
                />
                <View style = { {marginBottom: 15} }></View>
                <Button
                    title="Search"
                    onPress={() => this.searchMovie(this.state.input)}
                />
                <View style = { {marginBottom: 15} }></View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Search Results</Text>
                <View style = { {marginBottom: 15} }></View>

                <FlatList
                    data={this.state.currentMovies}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index) => index.toString()}
                    ItemSeparatorComponent = {this.renderSeparator}
                />
            </View>
            </SafeAreaView>
        )
    }
}

export default ScreenTwo;