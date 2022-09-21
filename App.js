import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';


const App = () => {
	const URI = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

	const initialState = () => Math.floor(Math.random() * 6)
	const [face, setFace] = useState(initialState());


	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => setFace(initialState())}>
				<Image style={styles.image} source={URI[face]} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setFace(initialState())}>
				<Text style={styles.gamePlayButton}>Roll It</Text>
			</TouchableOpacity>
		</View>
	);
};


export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222831',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: 200,
		height: 200
	},
	gamePlayButton: {
		fontSize: 20,
		color: '#F2A365',
		marginTop: 30,
		paddingHorizontal: 40,
		paddingVertical: 10,
		borderColor: '#30475E',
		borderWidth: 3,
		borderRadius: 5,
		fontWeight: 'bold'
	}
});