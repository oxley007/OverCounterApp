import React, { Component } from 'react';
import { connect } from "react-redux";
import { addStopwatch } from "../../Actions/index";

/*
Native base and react native
*/
import { Container, Footer, H2, H1, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

/*
Redux constants*/
const mapStateToProps = state => {
  return { avgSeconds: state.stopwatch.avgSeconds, secondsElapsed: state.stopwatch.secondsElapsed };
};


class AvgSecondsDisplay extends Component {

  constructor(props) {
    super(props);

    this.incrementer = null;

    this.avgSecondsDisplay = this.avgSecondsDisplay.bind(this);

  }



  avgSecondsDisplay() {
    //console.log(this.state.avgSeconds);
    console.log(this.props.avgSeconds + " avg seconds");
    if (isNaN(parseFloat(this.props.avgSeconds))) {
      return (
      <Text style={{fontSize: 8, height: 15, top: 0, color: '#fff'}}>(Avg: 0sec)</Text>
    )
    }
    else if (this.props.secondsElapsed === 120) {
      return <Text style={{fontSize: 8, height: 15, top: 0, color: '#fff'}}>(PAUSED)</Text>
    }
    else {
    return (
      <Col>
      <Row style={{marginBottom: 10}}>
      <Text style={{fontSize: 12, lineHeight: 12, height: 12, color: '#fff'}}>Avg: </Text>
      </Row>
      <Row>
      <Text style={{fontSize: 12, lineHeight: 12, height: 12, color: '#fff'}}>{this.props.avgSeconds}sec</Text>
      </Row>
      </Col>
      )
      }
    }

  render() {
    return (
      <Col>
      {this.avgSecondsDisplay()}
    </Col>
    );
  }
}


export default connect(mapStateToProps)(AvgSecondsDisplay);
