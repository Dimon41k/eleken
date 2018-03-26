import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
window.navigator.userAgent = 'react-native';
import  But from 'antd-mobile/lib/button';
import Slider from 'antd-mobile/lib/slider';
import { Redirect } from 'react-router-native';




export default class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      columnInputValue: 2
    }

  }

  log = (name) => {
    if(name == "changeColumn")
    return (value) => {
      console.log(`${name}: ${value}`);
      this.setState(prevState => {
        prevState.columnInputValue = value;
        return prevState;
      });
    };
  }

  validFormInput = () => {
    if(this.state.searchInput === ""){
      return false;
    } else {
      return true;
    }
  }

  searchImages = () => {
    if(this.validFormInput()){
      this.setState(prevState => {
        prevState.redirectToDisplay = true;
        return prevState;
      });
      console.log(this.state);
    } else {
      this.setState(prevState => {
        prevState.redirectToDisplay = false;
        return prevState;
      });
      console.log(this.state);
    }
  }

  render(){
    if (this.state.redirectToDisplay) {
      let redirectString = `/display_screen/${this.state.searchInput}/${this.state.columnInputValue}`;
      return <Redirect to={redirectString} />
    } 
      return (
        <View>
          <Text>Search Term</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(searchInput) => this.setState({searchInput})}
          />
          <Text>Columns</Text>
          <Slider
          style={{ marginLeft: 30, marginRight: 30 }}
          defaultValue={this.state.columnInputValue}
          min={1}
          max={5}
          step={1}
          onChange={this.log('changeColumn')}
          />
          <Text onPress={this.searchImages} style={{fontSize:50}}>Search</Text>
        </View>
      )
  }
}
