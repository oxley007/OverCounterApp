import React, { Component } from 'react';
import Add from './Add.js';
import OverBowled from '../OverBowled/OverBowled.js';
import { connect } from "react-redux";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Body, Footer, Content, Text } from 'native-base';

/*
Material UI constants
*/
const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  fixedBottom: {
    position: 'fixed',
    right: '0',
    bottom: '1rem',
    left: '0',
    zIndex: '1030',
  }
});

/*
Redux Constants
*/

/*
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};
*/


class AddBall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      over: 0,
      ball: 0
    };

    //this.overBowled = this.overBowled.bind(this);
  }

/*
  overBowled() {
  if (this.props.ball === 6) {
    return <text>hello</text>
    //<OverBowled cancelOver={this.props.cancelBowledOver} wickets={this.props.wickets} stopwatch={this.props.stopwatch} highestPartnership={this.props.highestPartnership} addWicket={this.props.addWicket} />
    }
  else {
      return
    }
  }
  */


  render() {

    return (

     
     <Add className="add-ball-wicket" removeBall={this.props.removeBall} wickets={this.props.wickets} highestPartnership={this.props.highestPartnership} averagePartnerhsip={this.props.averagePartnerhsip} addWicket={this.props.addWicket}/>
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(AddBall);

export default AddBall;

//  <Add className="add-ball-wicket" removeBall={this.props.removeBall} wickets={this.props.wickets} highestPartnership={this.props.highestPartnership} averagePartnerhsip={this.props.averagePartnerhsip} addWicket={this.props.addWicket}/>

/*
export default compose(
  withStyles(styles),
  connect(mapStateToProps)
  )(AddBall);
*/
