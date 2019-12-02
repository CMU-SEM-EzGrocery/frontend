import React, {Component, useContext, Fragment} from 'react'; 
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
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Item } from 'native-base';


var items = [
  {
    id: 1,
    name: 'Please input',
  },
];

class StandardDropdown extends Component {
  static contextType = LocationContext;

  constructor(props) {
    super(props);
    
    this.state = {
      selectedItems: [
        
      ],
      itemList: [{
        id: 1,
        name: 'Please input',
      },]
    }
  }
  
  async onStartPointChange({place}) {
    // console.log(place);
    await this.context.updateStPoint({place});
    if(!this.context.state.possibleSt)
    return;
    res = [];
    cnt = 0;
    this.context.state.possibleSt.map((item) => {
      res.push({
        id: ++cnt,
        name: item.formatted_address,
      }) 
    });
    this.setState({itemList: res}, () => {
      // console.log(this.state.itemList);
    });
  }

  render() {
    return (  
    <View>
      <Text style={styles.label}> {this.props.titleStr}</Text>
      <Fragment >
          {/* Single */}
          <SearchableDropdown
            onItemSelect={(item) => {
              this.props.changeFunc(item.name);
              const items = this.state.selectedItems;
              items.push(item);
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            // items={items}
            items={this.state.itemList}
            defaultIndex={0}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: place => this.onStartPointChange({place})
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    // marginTop: 50,
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
});

export default StandardDropdown;