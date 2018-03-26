import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import io from 'socket.io-client';
import cfg from '../config/cfg';
import Grid from 'react-native-grid-component';


export default class Display  extends React.Component{
  constructor(props) {
    super(props);
    this.socket = io(cfg.WS, {
      transports: ['websocket']
    });
    this.state = {
      loading: false,
      data: [],
    };
    console.log(props.match.params);
  }

  componentDidMount(){
    this.makeRemoteRequest();
  }
  makeRemoteRequest = ()=>{
    this.setState({loading: true});
    let requestURL = `https://images.search.yahoo.com/search/images?p=${this.props.match.params.search_term.split(" ").join("+")}`;
    this.socket.emit('send url for google api', requestURL);
    console.log(requestURL)
    this.socket.on('recive data from google api', (d) => {
      this.setState({data: d.images, loading: false});
    })
  }
  _renderPlaceholder = i => <View style={styles.item} key={i} />;
  _renderItem = (x, i) => (
    <View style={ styles.item} key={i} >
      <Image style={{width:200, height:200}} source={{uri: x}} />
    </View>
  );
  render(){
    if(this.state.loading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
    <View>
      <Link
        to={`/`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
        <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/line/36/arrow_left-128.png'}} style={styles.back_url} />
      </Link>
      <View style={{width:"100%", height:"100%"}}>
        <Grid
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={this.state.data}
          itemsPerRow={parseInt(this.props.match.params.columns)}
        />
      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  },
  back_url: {
    width: 50,
    height: 50
  },
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})
