import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
export default DisplayScreen = ({ match }) => (
    <View>
        <Text>
            {JSON.stringify(match)}
        </Text>
    </View>
)