import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";

export default function App() {
  const animation = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) {
      animation.current?.play();
    } else {
      animation.current?.pause();
    }
  }, [playing]);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "transparent",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/gradientBall.json")}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={{
            ...styles.button,
          }}
          onPress={() => {
            Haptics.impactAsync(playing ? Haptics.ImpactFeedbackStyle.Medium: Haptics.ImpactFeedbackStyle.Heavy);
            setPlaying(!playing);
          }}
        >
          <Text style={{ color: "white" }}>{`${playing ? "Pause" : "Play"}`}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
