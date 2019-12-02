import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { navigate } from '../../navigationRef';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class chatList extends Component {
  toDetail = () => {
    navigate('ChatScreen');
  } 
  render() {
    return (
      <Container>
        <Content>
          <List>
            <TouchableOpacity
              onPress={ () => this.toDetail() }
            >
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}