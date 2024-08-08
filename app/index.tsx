import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex items-center justify-center h-full"
    >
      <Text style={{
        fontFamily: "outfit",
        fontSize: 24,
        color: "black",
      }}>Hello World!</Text>
    </View>
  );
}
