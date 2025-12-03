import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
//import ignoreWarnings from "../../utils/ignoreWarnings";
import API from "../API/API.js";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import RenderCount from "../UI/RenderCount.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import initialModules from "../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  //Initialisations --------------------------

  //ignoreWarnings();
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  // State -----------------------------------r

  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setModules(response.result);
  };

  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);
  // Handlers --------------------------------

  const handleDelete = (deletedModule) =>
    setModules(
      modules.filter((module) => module.ModuleID !== deletedModule.ModuleID)
    );

  const handleAdd = (newModule) => setModules([...modules, newModule]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.replace("ModuleListScreen", { module, onDelete, onModify });
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  // View ------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading records ...</Text>}
      <RenderCount />
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
