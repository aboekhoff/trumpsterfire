import React from 'react'
import { List, ListItem, ScrollView, View } from 'react-native'
import { getTrumps } from '../util/api'

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
      console.log('got trumps in component did mount')
      console.log(trumps)
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