import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

function Home() {
	const navigate = useNavigate();

	return (
		<View style={styles.container}>
			<Text style={{
            margin: 20,
            fontSize: 20,
            borderBottomWidth: 3,
        }}>Home</Text>

			<TouchableOpacity onPress={() => navigate("/login")}>
				<Text style={{
            margin: 20,
            fontSize: 20,
        }}>Login</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Home;