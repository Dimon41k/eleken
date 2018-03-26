import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link, Redirect } from 'react-router-native'
import Display from "./Display"
import ElekenTestRN from "./ElekenTestRN"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import thunk from "redux-thunk"
import ElekenTestBackEnd from "../containers/ElekenTestBackEnd"


const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>ElecenTestRN</Text>
        </Link>
        <Link
          to="/ElekenTestBackEnd"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>ElekenTestBackEnd</Text>
        </Link>
      </View>
      
      <Route exact path="/" component={ElekenTestRN}/>
      <Route path="/ElekenTestBackEnd" component={ElekenTestBackEnd}/>
      <Route path="/display_screen/:search_term/:columns" component={Display}/>

    </View>
  </NativeRouter>
)

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

export default ()=>(
  <Provider store={store}>
    <App/>
  </Provider>
)
