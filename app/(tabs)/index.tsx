import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["bisque", "orange"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientedView}
      >
        <Text lightColor="black" darkColor="white" style={styles.title}>
          Gradiented
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gradientedView: {
    height: 40,
    width: "100%",
  },
});
