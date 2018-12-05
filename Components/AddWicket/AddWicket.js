import React, { Component } from 'react';

/*
Native base and react native
*/
import { Container, Footer, H2, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';



class AddWickets extends Component {

  render() {
    return (
      <Button rounded light onPress={this.props.addWicket}>
        <Text style={{color: 'red'}}>W+</Text>
      </Button>
    );
  }
}

export default AddWickets;
