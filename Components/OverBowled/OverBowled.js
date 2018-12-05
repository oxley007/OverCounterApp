import React, { Component } from 'react';
//import './OverBowled.css';
//import AddWicket from '../AddWicket/AddWicket.js';
//import BallRemove from '../BallRemove/BallRemove.js';
/*
Redux imports
*/
import { addOver } from "../../Actions/index";
import { connect } from "react-redux";
/*
Redux constants
*/
const mapDispatchToProps = dispatch => {
  return {
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};
/*
Material UI Constants
*/
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
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  alignCenter: {
    textAlign: 'center',
    marginTop: 'auto',
  },
  containerMargin: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  noMargin: {
    ['@media (max-height:650px)']: { // eslint-disable-line no-useless-computed-key
      margin: '0',
    },
  }
});


class OverBowled extends Component {
  constructor(props) {
    super(props);

    this.state = {
          over: 0,
          ball: 0
        };

    this.overBowled = this.overBowled.bind(this);
    this.overCount = this.overCount.bind(this);

  }

  overCount() {
    let overs = this.props.over;
    console.log(this.props.over);
    let balls = this.props.ball;
    console.log(this.props.ball);
    balls = 0;
    overs++;

    this.setState({
      ball: balls,
      over: overs
    }, function () {
      const { over, ball } = this.state;
      this.props.addOver({ over, ball });
      console.log(this.props.addOver({ over, ball }));
    });
  }

    overBowled() {
      console.log(this.props.ball );
      if (this.props.ball === 6) {
        const { classes } = this.props;
        return (
          <div>
          <Grid className={classes.containerMargin} container spacing={12}>
            <Grid item xs={12} className={classes.alignCenter}>
              <h2 className={classes.noMargin}>Over bowled</h2>
            </Grid>
          </Grid>
          <Grid className={classes.containerMargin} container spacing={12}>
            <Grid item xs={3} className={classes.alignCenter}>
              <BallRemove className="" wickets={this.props.wickets} stopwatch={this.props.stopwatch} highestPartnership={this.props.highestPartnership} />
            </Grid>
            <Grid item xs={6} className={classes.alignCenter}>
              <Button variant="fab" size="medium" color="primary" aria-label="Add" className={classes.button} onClick={this.overCount}>
              OK
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.alignCenter}>
              <AddWicket className="Wicket" addWicket={this.props.addWicket} />
            </Grid>
          </Grid>
          </div>
        )

      }
      else {
      return <p></p>
    }

    }

  render() {
    return (
      <div className="over-bowled-app">
      {this.overBowled()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverBowled);

/*
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(OverBowled);
  */
