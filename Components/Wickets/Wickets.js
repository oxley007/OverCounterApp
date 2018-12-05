import React, { Component } from 'react';
import WicketsDisplay from './WicketsDisplay';

/*
Native base and react native
*/
import { Container, Footer, H2, H1, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

// Custom Styles
const styles = StyleSheet.create({
  textHeader: {
    color: '#fff',
  },
  textDesc: {
    color: '#eee',
    fontWeight: '100',
  },
  colCenter: {
    alignItems: 'center',
  },
  horizontalRule: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  }
});

class Wickets extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid style={{width: '100%' }}>
        <Row>
          <Col size={8}>
            <Row><H1 style={styles.textHeader}>Wickets:</H1></Row>
            <Row><Text style={styles.textDesc}>Total wickets in this innings.</Text></Row>
          </Col>
          <Col size={4}>
            <Row>
            <Button rounded style={{backgroundColor: 'transparent'}} onPress={this.props.removeWicket} title="Click me">
            <Icon name='remove' />
            </Button>
            <WicketsDisplay wickets={this.props.wickets} />
              <Button rounded style={{backgroundColor: 'transparent'}} onPress={this.props.addWicket} title="Click me">
            <Icon name='add' />
            </Button>
            </Row>
          </Col>
        </Row>
        <View style={styles.horizontalRule} />
      </Grid>
    );
  }
}

export default Wickets;
