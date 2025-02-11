import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function sildelesson5() {
    // const [dem, setDem] = useState(0);
    const [backgroundColor, setbackgroundcolor] = useState("white");
    
    const handlgreen = () => {
        setbackgroundcolor("green");
    };

    const handlyellow = () => {
        setbackgroundcolor("yellow");
    };
    const handlred = () => {
        setbackgroundcolor("red");
    };

    const handlblue = () => {
        setbackgroundcolor("blue");
    };
    const handlbrown = () => {
        setbackgroundcolor("brown");
    };

    const handlblack = () => {
        setbackgroundcolor("black");
    };
    return (
        <View style={[styles.container, {backgroundColor}]}>
          <Text style={styles.counterText}>{backgroundColor}</Text>
          <TouchableOpacity style={styles.button1} onPress={handlgreen}>
            <Text style={styles.buttonText}>Green</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handlyellow}>
            <Text style={styles.buttonText}>Yellow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3} onPress={handlred}>
            <Text style={styles.buttonText}>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={handlblue}>
            <Text style={styles.buttonText}>Blue</Text>
          </TouchableOpacity>   
          <TouchableOpacity style={styles.button5} onPress={handlbrown}>
            <Text style={styles.buttonText}>Brown</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6} onPress={handlblack}>
            <Text style={styles.buttonText}>Black</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    counterText: {
      fontSize: 48,
      marginBottom: 20,
    },
    // button: {
    //   backgroundColor: '#007BFF',
    //   paddingVertical: 10,
    //   paddingHorizontal: 20,
    //   borderRadius: 5,
    //   width: 240,
    //   alignItems: 'center',
    //   marginVertical: 10,
    // },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    button1:{
        backgroundColor: '#green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
    button2:{
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
    button3:{
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
    button4:{
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
    button5:{
        backgroundColor: 'brown',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
    button6:{
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 240,
        alignItems: 'center',
        marginVertical: 10,
    },
  });
  