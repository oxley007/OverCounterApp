import React, { Component } from 'react';
/*
Redux imports*/
import { connect } from "react-redux";
import { addOver } from "../../Actions/index";

/*
Nativebase and React Nariveimports
*/
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View} from 'react-native';

/*
Redux Constants
*/
const mapDispatchToProps = dispatch => {
  return {
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};

const styles = StyleSheet.create({
    smallCircle: {
      height: 50,
      width: 50,
      backgroundColor: '#fff',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    smallIcon: {
      color: '#c471ed',
      marginTop: 5,
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      fontSize: 30
    },
});


class BallRemove extends Component {
  constructor(props) {
    super(props);

    this.state = {
          over: 0,
          ball: 0
        };

    this.removeBall = this.removeBall.bind(this);
    this.addToRedux = this.addToRedux.bind(this);

  }

removeBall() {
  console.log('remove over?');
  console.log(this.props.over);
  console.log(this.props.ball);
  console.log(this.props.wickets);
  let overs = this.props.over;
  let ball  = this.props.ball;

  if (ball > 0) {
  ball--;
  }
  else if (ball === 0 && overs >= 1) {
    overs--;
    ball = 6;
  }
  this.setState({
    over: overs,
    ball: ball
  }, function () {
    console.log("getting hit, remove over");
    this.addToRedux();
  });

  console.log("this getting hit?");
  let clickFrom = 'addBall';
  console.log(this.props.wickets);
  console.log(ball);
  console.log(overs);
  console.log(clickFrom);
  this.props.highestPartnership(this.props.wickets, ball, overs, null, clickFrom);

}

addToRedux() {
  const { over, ball } = this.state;
  console.log({over});
  this.props.addOver({ over, ball });
  console.log(this.props.addOver({ over, ball }));
}



  render() {
    const { classes } = this.props;
    return (
        <Button rounded small style={styles.smallCircle} light onPress={this.removeBall} title="Click me">
          <Icon name='remove' style={styles.smallIcon} />
        </Button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BallRemove);
