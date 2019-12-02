import React, {Component, useContext} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { Input } from 'react-native-elements'

import { Context as LocationContext } from '../../context/LocationContext';

import ModalDropdown from 'react-native-modal-dropdown';
const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

class StandardDropdown extends Component {
  static contextType = LocationContext;

  constructor(props) {
    super(props);
    
    this.state = {
      dropdown_4_options: null,
      // dropdown_4_defaultValue: 'loading...',
      stPoint: '',
    };
  }

  async onStartPointChange({place}) {
    this.setState({stPoint:place});
    await this.context.updateStPoint({place});
    this._dropdown_4_show();
  }

  render() {
    return (
      <View>
        <Text style={styles.label}> {this.props.titleStr}</Text>
      
        <TextInput style={styles.input}
          returnKeyType="next"
          value={this.state.stPoint}
          onChangeText={place => this.onStartPointChange({place})}
          // onEndEditing={this._dropdown_4_show()}
          placeholder='Please input your start position'
          placeholderTextColor='rgba(225,225,225,0.7)'>
        </TextInput>

        <ModalDropdown 
          ref={el => this._dropdown_4 = el}
          style={styles.dropdown_4}
          dropdownStyle={styles.dropdown_4_dropdown}
          options={this.state.dropdown_4_options}
          defaultValue={'Please input'}
          onDropdownWillShow={this._dropdown_4_willShow.bind(this)}
          onDropdownWillHide={this._dropdown_4_willHide.bind(this)}
          onSelect={(idx, value) => this._dropdown_4_onSelect(idx, value)}
        />


        {/* <TouchableOpacity onPress={this._dropdown_5_show.bind(this)}>
              <Text style={styles.textButton}>
                {'Show dropdown'}
              </Text>
            </TouchableOpacity> */}

        {/* <ModalDropdown 
          ref={el => this._dropdown_5 = el}
          style={styles.dropdown_5}
          options={['Select me to hide', `I can't be selected`, 'I can only be selected outside']}
          defaultValue='Try the Show button above'
          onDropdownWillShow={this._dropdown_5_willShow.bind(this)}
          onDropdownWillHide={this._dropdown_5_willHide.bind(this)}
          onSelect={this._dropdown_5_onSelect.bind(this)}
          /> */}

          
      </View>
    );
  }

  _dropdown_4_show() {
    if(!this.context.state.possibleSt) return ;
    this._dropdown_4 && this._dropdown_4.show();
  }

  _dropdown_4_willShow() {
    console.log(this.context.state.possibleSt);
    if(this.context.state.possibleSt)
      this.setState({
        dropdown_4_options: this.context.state.possibleSt.map(item => item.formatted_address),
      });
    // setTimeout(() => this.setState({
    //   dropdown_4_options: this.context.state.possibleSt.map(item => item.formatted_address),
    //     // dropdown_4_defaultValue: 'loaded',
    //   }), 1000);
  }

  _dropdown_4_willHide() {
    this.setState({
      dropdown_4_options: null,
      // dropdown_4_defaultValue: 'loading',
    });
  }

  _dropdown_4_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
    this.setState({stPoint: value});
    console.log(this.context.possibleSt);
    this.props.changeFunc(this.context.possibleSt[idx]);
  }

  _dropdown_5_show() {
    this._dropdown_5 && this._dropdown_5.show();
  }

  _dropdown_5_select(idx) {
    this._dropdown_5 && this._dropdown_5.select(idx);
  }

  _dropdown_5_willShow() {
    return false;
  }

  _dropdown_5_willHide() {
    let idx = this._dropdown_5_idx;
    this._dropdown_5_idx = undefined;
    return idx == 0;
  }

  _dropdown_5_onSelect(idx, value) {
    this._dropdown_5_idx = idx;
    if (this._dropdown_5_idx != 0) {
      return false;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    textAlign:'left',
    backgroundColor:'#F2F2F2',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 25,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:20,  
    width:"90%",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
  labelBtn: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    marginLeft:25,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 110,
    fontWeight: 'bold',
  },
  buttonS: {
    backgroundColor: '#03a557',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    width:"70%",
    marginLeft:60,
    position:"relative"  
  },

  dropdown_4: {
    textAlign:'left',
    backgroundColor:'#F2F2F2',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 25,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:20,  
    width:"90%",
  },
  // dropdown_4: {
  //   margin: 8,
  //   borderColor: 'lightgray',
  //   borderWidth: 1,
  //   borderRadius: 1,
  // },
  dropdown_4_dropdown: {
    width: 100,
  },

  dropdown_5: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
});
export default StandardDropdown;