import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
		<View className="flex items-center justify-center h-full">
			<Link href={"/login"}>
				<Text className="font-[outfit] text-2xl text-black">
					Go To Login Screen
				</Text>
			</Link>
		</View>
	);
}
