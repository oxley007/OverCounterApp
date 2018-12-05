import React, { Component } from 'react';
import './Ball.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };

    this.incrementer = null;

    this.handleClick = this.handleClick.bind(this);
    this.stopwatch = this.stopwatch.bind(this);
    this.stopwatchTime = this.stopwatchTime.bind(this);

    const { classes } = props;
  }

handleClick() {
  //this.props.stopwatch();
  this.stopwatch();
  //let stopwatchTime = this.stopwatchTime();
  //console.log(stopwatchTime);
  this.props.addBall();
}

stopwatch() {
  /*
  First clear the timer
  */
  clearInterval(this.incrementer);
  this.setState({
    secondsElapsed: 0,
    laps: []
  });

  /*
  Then start the timer
  */

  this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
}

stopwatchTime() {
return (
<div className="stopwatch">
  <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
  <ul className="stopwatch-laps">
    { this.state.laps.map((lap, i) =>
        <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
    }
  </ul>
</div>
)
}

  render() {
    return (
      <div className="ball-add-app">
        <div>
        {this.stopwatchTime()}
        </div>
        <div className="add-ball">
          <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.handleClick}>
        <AddIcon />
      </Button>
        </div>
      </div>
    );
  }
}

//const Button = (props) =>
  //<button type="button" {...props} className={"btn " + props.className } />;

export default Ball;
