import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({ background = "dodgerblue", fontColor = "white" }) => {
  //initialisations --------------------------
  // State -----------------------------------
  const renderCount = useRef(0);
  renderCount.current += 1;
  // Handlers --------------------------------
  // View -----------------------------------
  return (
    <Text style={{ backgroundColor: background, color: fontColor }}>
      Number of renders: {renderCount.current}
    </Text>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 20,
  },
});

export default RenderCount;
