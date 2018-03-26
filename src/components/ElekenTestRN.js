import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Search from  './Search'

export default ElekenTestRN = ({ match }) => {
return (
  <View>
    <Route exact path={match.url} component={Search}/>
  </View>
)
}
const styles = StyleSheet.create({
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
