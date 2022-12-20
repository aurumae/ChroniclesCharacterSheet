/**
 * @format
 */

/**
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const CharacterSheet = () => {
  const [intelligence, setIntelligence] = useState(0);
  const [wits, setWits] = useState(0);
  const [resolve, setResolve] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [presence, setPresence] = useState(0);
  const [manipulation, setManipulation] = useState(0);
  const [composure, setComposure] = useState(0);

  return (
    <View>
      <Text>Intelligence:</Text>
      <TextInput
        keyboardType='numeric'
        value={intelligence}
        onChangeText={(text) => setIntelligence(text)}
      />
      <Text>Wits:</Text>
      <TextInput
        keyboardType='numeric'
        value={wits}
        onChangeText={(text) => setWits(text)}
      />
      <Text>Resolve:</Text>
      <TextInput
        keyboardType='numeric'
        value={resolve}
        onChangeText={(text) => setResolve(text)}
      />
      <Text>Strength:</Text>
      <TextInput
        keyboardType='numeric'
        value={strength}
        onChangeText={(text) => setStrength(text)}
      />
      <Text>Dexterity:</Text>
      <TextInput
        keyboardType='numeric'
        value={dexterity}
        onChangeText={(text) => setDexterity(text)}
      />
      <Text>Stamina:</Text>
      <TextInput
        keyboardType='numeric'
        value={stamina}
        onChangeText={(text) => setStamina(text)}
      />
      <Text>Presence:</Text>
      <TextInput
        keyboardType='numeric'
        value={presence}
        onChangeText={(text) => setPresence(text)}
      />
      <Text>Manipulation:</Text>
      <TextInput
        keyboardType='numeric'
        value={manipulation}
        onChangeText={(text) => setManipulation(text)}
      />
      <Text>Composure:</Text>
      <TextInput
        keyboardType='numeric'
        value={composure}
        onChangeText={(text) => setComposure(text)}
      />
    </View>
  );
};

export default CharacterSheet;
