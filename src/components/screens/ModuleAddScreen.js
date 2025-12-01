import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: null, //Math.floor(1000000 + Math.random() * 900000),
  ModuleCode: null, //"CI6330",
  ModuleName: null, //"Mobile Application Development",
  ModuleLevel: null, //6,
  ModuleLeaderID: null, //1,
  ModuleLeaderName: null, // "Graeme JONES",
  ModuleImage: null,
  //"https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg",
};

const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations --------------------------
  const { onAdd } = route.params;
  defaultModule.ModuleID = Math.floor(1000000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg";

  // State -----------------------------------
  const [module, setModule] = useState(defaultModule);
  // Handlers --------------------------------
  const handleAdd = () => {
    onAdd(module);
  };
  const handleCancel = () => {
    navigation.goBack();
  };

  const handleChange = (field, value) => {
    setModule({ ...module, [field]: value });
  };
  // View ------------------------------------
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "gray",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

export default ModuleAddScreen;
