import React, { Component } from 'react';
import { connect } from "react-redux";
import { addOver } from "../../Actions/index";

/*
Native base and react native
*/
import { Container, Footer, H2 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View, Text } from 'react-native';


/*
Redux Constants
*/
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};

class OverCount extends Component {

  render() {
    return (
      <Text style={{ color: '#fff', fontSize: 55 }}>
        {this.props.over}.{this.props.ball}
      </Text>
    );
  }
}


export default connect(mapStateToProps)(OverCount);
