import React, { Component } from 'react';
import { compose } from 'react-compose';

import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View} from 'react-native';

import { connect } from "react-redux";
import { addStopwatch } from "../../Actions/index";
import { addOver } from "../../Actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addStopwatch: stopwatch => dispatch(addStopwatch(stopwatch)),
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball, secondsElapsed: state.stopwatch.secondsElapsed, avgBall: state.stopwatch.avgBall, avgSeconds: state.stopwatch.avgSeconds };
  //return { over: state.over.over, ball: state.over.ball };
};

const styles = StyleSheet.create({
    rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 8,
        backgroundColor: '#777',
    },
    add: {
        backgroundColor: '#777',
        borderRadius: 50,
        width: 60,
        height: 60,
        fontSize: 40,
    },
    largeCircle: {
      height: 80,
      width: 80,
      backgroundColor: '#fff'
    },
    largeIcon: {
      fontSize: 65,
      color: '#c471ed',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
    },
    largeOk: {
      fontSize: 20,
      color: '#c471ed',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
    }
});

/*
const styles = theme => ({
button: {
  margin: theme.spacing.unit,
  backgroundColor: '#fff',
  color: '#c471ed',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#c471ed',
  },
  '&:active': {
    backgroundColor: '#f64f59',
    color: '#fff',
},
},
});
*/


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    '.' +
  ('0' + sec % 60).slice(-2)

class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null,
      incrementer: null,
      avgBall: [],
      avgSeconds: 0,
      over: 0,
      ball: 0
    };

    this.incrementer = null;

    this.stopwatch = this.stopwatch.bind(this);
    this.addBall = this.addBall.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);

  }

addBall() {

  console.log(this.props.stop);

  console.log(this.props.over);
  console.log(this.props.ball);
  let balls = this.props.ball;
  let overs = this.props.over;


  this.stopwatch();

  console.log(balls);
  if (balls <= 5) {
  balls++;
  }
  else if (balls === 6) {
    balls = 0;
    overs++;
  }
  this.setState({
    ball: balls,
    over: overs
  }, function () {
    const { over, ball } = this.state;
    console.log({ball});
    this.props.addOver({ over, ball });
    console.log(this.props.addOver({ over, ball }));
  });

  console.log(this.props.wickets);

  if (this.props.wickets > 1) {
    this.props.averagePartnerhsip(this.props.wickets, balls, this.props.over)
  //this.averagePartnerhsip(this.props.wickets, balls, this.props.over);
}


let clickFrom = 'addBall';

this.props.highestPartnership(this.props.wickets, balls, this.props.over, null, clickFrom);

}

stopwatch() {

  /*
  Work out the average seconds ecslipsed by adding to the array
  */

    console.log(this.props.avgBall);
    console.log(this.state.avgBall);
    console.log(this.props.avgSeconds);
    console.log(this.state.secondsElapsed);
    console.log(this.props.secondsElapsed);
    let secondsElapsed = this.state.secondsElapsed;
    console.log(secondsElapsed);
    //let formattedAvgSeconds = formattedSeconds(secondsElapsed);
    //console.log(formattedAvgSeconds);
    let avgBalls = this.state.avgBall;
    console.log(this.props.ball + ' props.ball for not having average time');
    if (this.props.ball >= 1 && this.props.ball <= 5) {
      console.log('hit and should be if ball 0 or 6');
    avgBalls.push(secondsElapsed);
  }


    //let avgSeconds = avgBalls[avgBalls.length - 1];
    let total = 0;
    for(var i = 0; i < avgBalls.length; i++) {
    let num = parseFloat(avgBalls[i]);
    console.log(num);
    total += num;
    }
    let avgSecondsFull = total / avgBalls.length;
    console.log(avgSecondsFull);
    var avgSeconds = avgSecondsFull.toFixed(0);
    //avgSeconds = formattedSeconds(avgSeconds);
    //let formattedAvgSeconds = formattedSeconds(avgSeconds);
    //console.log(formattedAvgSeconds);
    console.log(avgSeconds);

    console.log(avgBalls);

  /*
  First clear the timer
  */
  clearInterval(this.incrementer);
  this.setState({
    secondsElapsed: 0,
    laps: [],
    incrementer: this.incrementer,
    avgBall: avgBalls,
    avgSeconds: avgSeconds,
  }, function () {
    const { secondsElapsed, laps, incrementer, avgBall, avgSeconds } = this.state;
    console.log({secondsElapsed, laps, incrementer, avgBall, avgSeconds});
    this.props.addStopwatch({ secondsElapsed, laps, incrementer, avgBall, avgSeconds });
    console.log(this.props.addStopwatch({ secondsElapsed, laps, incrementer, avgBall, avgSeconds }));
  });

  /*
  Then start the timer
  */

    this.incrementer = setInterval( () =>

        this.setState({
          secondsElapsed: this.props.secondsElapsed + 1,
          incrementer: this.incrementer
        },  function () {
          if (this.props.secondsElapsed >= 120) {
            this.handleStopClick;
          }
          else if (this.props.ball === 6 || this.props.ball === 0) {
            //don't do anything.
          }
          else {
          const { secondsElapsed, incrementer, avgBall, avgSeconds } = this.state;
          //console.log({secondsElapsed, incrementer });
          console.log(this.props.secondsElapsed + 'seconds elapsed on ball.js');
          this.props.addStopwatch({ secondsElapsed, incrementer, avgBall, avgSeconds });
          //console.log(this.props.addStopwatch({ secondsElapsed, incrementer }));
        }
        }), 1000);


}

handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  checkOverBowled() {
    if (this.props.ball === 6) {
      return <Text style={styles.largeOk}>OK</Text>
      }
    else {
      return <Icon name='add' style={styles.largeIcon} />

      }
  }


  render() {
  const { classes } = this.props;
    return (
          <Button rounded large style={styles.largeCircle} light onPress={this.addBall} title="Click me">
            {this.checkOverBowled()}
          </Button>


    );
  }
}

//const Button = (props) =>
  //<button type="button" {...props} className={"btn " + props.className } />;

/*
copy this code:
  export default compose(
    withStyles(styles, { name: 'Cart' }),
    connect(mapStateToProps, null)
  )(Cart);
  */

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
