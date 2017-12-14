import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, WebView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { Spinner } from './components/Spinner'
import { StackNavigator } from 'react-navigation'

import { getTrumps } from './util/api'
import { IndexScreen } from './components/IndexScreen'
import { PageScreen } from './components/PageScreen'

const Trumpsterfire = StackNavigator({
  Index: { screen: IndexScreen },
  Page: { screen: PageScreen }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trumps: []
    }
  }

  render() {
    return (
      <Trumpsterfire />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
