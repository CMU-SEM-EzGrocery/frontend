import React from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Card, Text, ListItem } from 'react-native-elements';
    
import Deck from '../../components/Helpers/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


class MainHelpersScreen extends React.Component {
  
  renderNoMoreCards() {
    console.log("No More");
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10}}>
          There's no more content here. Please wait 1 hour for system to refresh
        </Text>
      </Card>
    );
  }

  renderCard(item){
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          // icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="Take this order!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text >Explore Your Queue Today!</Text>

        </View>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default MainHelpersScreen;
