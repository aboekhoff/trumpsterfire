import React from 'react'
import { StackNavigator } from 'react-navigation'

import { IndexScreen } from './components/IndexScreen'
import { PageScreen } from './components/PageScreen'

const Trumpsterfire = StackNavigator({
  Index: { screen: IndexScreen },
  Page: { screen: PageScreen }
})

export default class App extends React.Component {
  render() {
    return (
      <Trumpsterfire />
    )
  }
}