import React, {useState} from "react";
import {SafeAreaView, TextInput, StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  const [numberOne, onChangeNumberOne] = useState(null);
  const [numberTwo, onChangeNumberTwo] = useState(null);
  const [result, setResult] = useState("");
  
  const onClickSum = () => {
    if(numberOne != null && numberTwo != null){
      const sum = parseInt(numberOne) + parseInt(numberTwo);
      setResult(sum);
    }
    
  }

  const onClickDeduction = () => {
    if(numberOne != null && numberTwo != null){
      const deduction = parseInt(numberOne) - parseInt(numberTwo);
      setResult(deduction);
    }
  }

  return (
    <SafeAreaView style={styles.areaView}>
      <Text>Result:{result} </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumberOne}
        value={numberOne}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumberTwo}
        value={numberTwo}
        keyboardType="number-pad"
      />
      <View style={styles.fixToText}>
        <Button onPress={onClickSum} title="+" color="#f194ff"  ></Button>
      </View>
      <View style={styles.fixToText}>
        <Button onPress={onClickDeduction} title="-"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  areaView: {
    marginTop: 50,

  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  }

});
