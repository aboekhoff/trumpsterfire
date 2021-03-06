import React from 'react'
import { View, WebView } from 'react-native'
import { styles } from '../styles'

export class PageScreen extends React.Component {
  render() {
    const { uri } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          source={{ uri }}>
        </WebView>
      </View>
    )
  }
}