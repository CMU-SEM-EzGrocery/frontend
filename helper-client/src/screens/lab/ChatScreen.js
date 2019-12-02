import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { Entypo } from '@expo/vector-icons';

class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Jiafeng! Nice to Meet you, I am going to pick you up tomorrow 1:00 PM. Is that okay for you? See you there! ',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

Example.navigationOptions = {
  title: 'Chat',
  tabBarIcon: <Entypo name="chat" size={20} />
};

export default Example;