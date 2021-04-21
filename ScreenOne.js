import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, TextInput, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

// create DismissKeyboard so user can click anywhere to dismiss the keyboard
const DismissKeyboard = ({ children }) =>(
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
	  {children}
	</TouchableWithoutFeedback>
  );

const ScreenOne = props => {

    const [movieTitle, setMovieTitle] = useState('');
    return (
        <DismissKeyboard>
            <SafeAreaView>
                <View style = {{alignItems: 'center', backgroundColor: 'pink'}}>
                    
                    <View style = {{marginBottom: 30}}></View>
                    
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>An app to find your desired movie.</Text>
                    
                    <View style = {{marginBottom: 150}}></View>
                    
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Find out information of the movie</Text>
                        <TextInput 
                            style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1 }}
                            placeholder="Enter any movie keyword..." 
                            value={movieTitle} 
                            onChangeText={(text) => setMovieTitle(text)}
                        />
                        <Button title="Get Movie" onPress={() => {  
                            props.navigation.navigate('ScreenTwo', {movieTitle: movieTitle});
                            }}
                        />
                    </View>

                </View>
            </SafeAreaView>
        </DismissKeyboard>
    );

};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
});

export default ScreenOne;