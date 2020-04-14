import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View, Button
} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _onPressButton() {
    alert('Corona Virus is a dangerous disease. Kindly, take necessary measures to protect yourself and your loved ones!')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1580094687196-cbc2bdab67e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' }}
          style={{ width: '100%', height: '100%' }} >
          <View style={{
            backgroundColor: 'rgba(0,0,0,.6)',
            height: '100%', width: '100%',
            justifyContent: 'center',
            padding: 20
          }}>
            <Text style={styles.title}>Covid 19 Informatics </Text>
            <Text style={styles.text}>Stay aware of the 
            latest information on the COVID-19 outbreak, available on the WHO 
            website and through your national and local public health authority. 
            Most people who become infected experience mild illness and recover, 
            but it can be more severe for others. </Text>
        <Button title='Take Caution!' style={styles.btn}
            onPress={this._onPressButton} color="green"></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22,
  },
  btn: {
    fontSize: 25,
    padding: 30,
    bottom: 0,
  },
  title:{
    fontSize: 50,
    color: '#fff',
    paddingBottom: 20
  },
  text:{
    color: '#fff',
    fontSize: 20,
    paddingBottom: 20
    // fontFamily: 'Cochin'
  }
});

export default HomeScreen;