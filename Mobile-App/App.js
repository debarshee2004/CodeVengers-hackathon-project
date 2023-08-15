import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

//const image = {uri: 'https://images.unsplash.com/photo-1611760399750-bf3b95ac8f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'};

export default function App() {
  return (
    <ImageBackground
     source={require('./assets/LoadingBG.jpg')}
     style={styles.container}
    >
      <View style={styles.body}>
        <View style={styles.text}>
          <Text style={styles.parkingProblem}>PARKING PROBLEM?</Text>
          <Text style={styles.sayNoMore}>SAY NO MORE</Text>
        </View>
      </View>

      <View style={styles.welcome}>
        <View style={styles.panel}>
          <Text style={styles.parkingProblem}>WELCOME</Text>
          <ProgressCircle size={30} indeterminate={true} borderWidth={3} fill={'#80c2ff'} style={styles.circle}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body: {
    height: '20%',
    width: '85%',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#80c2ff',
    borderWidth: 5,
    borderColor: '#002e58',
    borderRadius: 30,
    marginBottom: 20
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  load: {
    marginTop: 5,
    marginLeft: 40 
  },
  parkingProblem: {
    color: 'white',
    fontSize: 25,
    fontWeight:"bold",
  },
  sayNoMore: {
    color: '#002e58',
    fontSize: 25,
    fontWeight:"bold",
  },
  welcome: {
    height: '10%',
    width: '85%',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#80c2ff',
    borderWidth: 5,
    borderColor: '#002e58',
    borderRadius: 30,
    marginBottom: 20
  },
  panel: {
    flexDirection : "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    marginLeft: 30
  }
});
