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
Redux constants
*/
const mapDispatchToProps = dispatch => {
  return {
    addStopwatch: stopwatch => dispatch(addStopwatch(stopwatch))
  };
};
const mapStateToProps = state => {
  return { secondsElapsed: state.stopwatch.secondsElapsed, laps: state.stopwatch.laps, lastClearedIncrementer: state.stopwatch.lastClearedIncrementer, stop: state.stopwatch.stop };
};



const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)



class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null,
      avgBall: [],
      avgSeconds: 0,
      over: 0,
      ball: 0
    };

    this.incrementer = null;


  }

  componentWillMount() {
    const { secondsElapsed, laps, lastClearedIncrementer, avgBall, avgSeconds } = this.state;
    //console.log(this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer }));
    this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer,avgBall, avgSeconds });
  }





  render() {
    console.log(this.props.secondsElapsed + " seconds elapsed Stopwatch.");
    console.log(this.state.secondsElapsed + " state seconds elapsed Stopwatch.");
    return (
        <H1 style={{color: '#fff'}}>{formattedSeconds(this.props.secondsElapsed)}</H1>
    );
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
