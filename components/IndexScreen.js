import React from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { getTrumps } from '../api'
import { styles } from '../styles'

export class IndexScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent Trumpsterfires',
  };

  constructor(props) {
    super(props)
    this.state = {
      trumps: []
    }
  }

  componentDidMount() {
    getTrumps().then(trumps => {
      this.setState({ trumps })
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const { trumps } = this.state

    return (
      <View style={styles.container}>
        <ScrollView>
          <List>
            {trumps.map((t, i) => (
              <ListItem
                onPress={() => navigate('Page', { uri: t.url })}
                dataSource
                avatar={{uri: t.image}}
                key={i}
                title={t.title}
              />
            ))}
          </List> 
        </ScrollView>
      </View>
    )
  }
}