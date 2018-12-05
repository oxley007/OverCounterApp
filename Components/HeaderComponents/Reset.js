import React, { Component } from 'react';
import { connect } from "react-redux";
import { addStopwatch } from "../../Actions/index";
import { addOver } from "../../Actions/index";

/*
Native base and react native
*/
import { Container, Footer, H2, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

const mapDispatchToProps = dispatch => {
  return {
    addStopwatch: stopwatch => dispatch(addStopwatch(stopwatch)),
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball, secondsElapsed: state.stopwatch.secondsElapsed, incrementer: state.stopwatch.incrementer };
};


class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: this.props.secondsElapsed,
      laps: this.props.laps,
      lastClearedIncrementer: this.props.lastClearedIncrementer,
      incrementer: this.props.incrementer,
      over: 0,
      ball: 0
    };

    this.incrementer = null;

    this.stopwatch = this.stopwatch.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);

  }

stopwatch() {

  /*
  First clear the timer
  */
  clearInterval(this.props.incrementer);
  this.setState({
    secondsElapsed: 0,
    laps: []
  }, function () {
    const { secondsElapsed, laps } = this.state;
    console.log({secondsElapsed, laps});
    this.props.addStopwatch({ secondsElapsed, laps });
    console.log(this.props.addStopwatch({ secondsElapsed, laps }));
  });

  /*
  Then start the timer
  */


    this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.props.secondsElapsed + 1
        }, function () {
          const { secondsElapsed } = this.state;
          console.log({secondsElapsed });
          this.props.addStopwatch({ secondsElapsed });
          console.log(this.props.addStopwatch({ secondsElapsed }));
        })
      , 1000);


}

handleStopClick() {
  console.log('stop hit');
    clearInterval(this.props.incrementer);

      let lastClearedIncrementer = this.props.lastClearedIncrementer;
      let secondsElapsed = this.props.secondsElapsed;
      let laps = this.props.laps;
      let incrementer = this.props.incrementer;
      console.log('stop hit 2?');
      //const { secondsElapsed, laps, lastClearedIncrementer };
      //console.log({ secondsElapsed, laps, lastClearedIncrementer });
      this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer, incrementer });
      console.log(this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer, incrementer }));
    this.props.resetBuilder()
  }


  render() {
    return (
        <Button warning onPress={this.handleStopClick}>
          <Text>Yes</Text>
        </Button>
    );
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(Ball);
