import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

const RootLayout: React.FC = () =>{

  const [fontsLoaded] = useFonts({
		"outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
		"outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
		"outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" options={{
        headerShown: false
      }}/>
    </Stack>
  );
}

export default RootLayout;

