import { View, StyleSheet, Image } from 'react-native';
import AppButton from "react-native-button-rounded";

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton
        onPress={() => console.log("Pressed")}
        accessibilityLabel="Rounded Button"
        textStyles={{
          fontSize: 18,
          fontWeight: "bold",
          color: "white"
        }}
        height={60}
        width={200}
      >Press Me!!</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
