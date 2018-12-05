import React, { Component } from 'react';

/*
Native base and react native
*/
import { Container, Footer, H2, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';


class WicketsDisplay extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Text style={{fontSize: 40, color: '#fff'}}>
        {this.props.wickets}
      </Text>
    );
  }
}

export default WicketsDisplay;
