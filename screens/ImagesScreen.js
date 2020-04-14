import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class InstagramScreen extends React.Component {

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.title}>Images</Text>
        <Image source={{ uri: 'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-3.jpg' }}
          style={{ width: '60%', height: '40%', margin: 10 }} />

        <Image source={{ uri: 'https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-inform.jpg' }}
          style={{ width: '60%', height: '40%', margin: 10, marginLeft: 'auto' }} />

          <Image source={{ uri: '          https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-address-fear.jpg' }}
            style={{ width: '60%', height: '40%', margin: 10, marginLeft: 'auto' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    img:{
        width: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
        marginTop: 22,
      fontSize: 30,
      backgroundColor: 'green',
      color: '#fff',
      padding: 20,
      marginBottom: 10,
    }
  });
  

export default InstagramScreen;