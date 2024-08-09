import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function LoginScreen() {
	return (
		<View>
			<Image
				source={require("./../../assets/images/login.png")}
				className="w-full h-[500px]"
			/>
			<View className="flex items-center p-8">
				<Text className="font-[outfit] text-3xl text-center">
					Ready To Make New Friend?
				</Text>
				<Text className="font-[outfit] text-1xl text-center text-gray">
					Let's Adopt the pet which you like and make their life happy again
				</Text>
				<Pressable className="w-full p-4 bg-primary border rounded-lg mt-[100px]">
					<Text className="font-[outfit] text-[20px] text-center">Get Started</Text>
				</Pressable>
			</View>
		</View>
	);
}
