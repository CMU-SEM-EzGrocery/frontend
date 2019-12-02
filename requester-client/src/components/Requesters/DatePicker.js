import React, { useState, useContext, Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, ScrollView, Image ,TouchableHighlight, DatePickerIOS } from 'react-native';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={
            (newDate) => {
              this.setState({chosenDate: newDate});
              // console.log(newDate);
              // console.log(newDate.toString());
              this.props.updateTime(newDate.toString().substr(0,25));
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});