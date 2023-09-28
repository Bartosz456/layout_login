import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';



export default Mycomponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={require('./assets/Screenshot_1.png')} />
      <StatusBar style="auto" />
     <View>
     <Text style={styles.log} >Logowanie</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Adres e-mail</Text>
        <Text style={styles.label}>Hasło</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.zaloguj}>Zaloguj</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  log: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  content: {
    textAlign: 'left',
  },
  label: {
    marginTop: 20,
    //textStyle: 'left',
    fontSize: 20,
  },
  zaloguj: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    borderRadius: 10,
    marginTop: 40,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 130,
    paddingRight: 130,
    backgroundColor: '#fa0000',
    elevation: 10,
  }
});

