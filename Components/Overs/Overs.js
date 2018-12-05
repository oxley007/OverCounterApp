import React, { Component } from 'react';
import OverCount from "./OverCount";
import { connect } from "react-redux";
import { addOver } from "../../Actions/index";

/*
Native base and React native
*/
import { Container, Footer, Text, Icon, H2, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';


// Custom Styles
const styles = StyleSheet.create({
  textHeader: {
    color: '#fff',
  },
  colCenter: {
    alignItems: 'center',
  }
});

/*
React constants
*/
const mapDispatchToProps = dispatch => {
  return {
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};

class Overs extends Component {
  constructor(props) {
    super(props);

    this.state = {
          over: 0,
          ball: 0
        };

    this.addOver = this.addOver.bind(this);
    this.removeOver = this.removeOver.bind(this);
    this.addToRedux = this.addToRedux.bind(this);
  }

  addOver() {
    let overs = this.props.over;
    let ball  = this.props.ball;

    overs++;
    this.setState({
      over: overs,
      ball: ball
    }, function () {
      console.log("getting hit, func");
      this.addToRedux();
    });

    console.log("this getting hit?");
    let clickFrom = 'addBall';
    this.props.highestPartnership(this.props.wickets, ball, overs, null, clickFrom);

  }

  removeOver() {
    console.log('remove over?');
    let overs = this.props.over;
    let ball  = this.props.ball;

    if (overs > 0) {
    overs--;
    }
    else {
      //do nothing
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
    this.props.highestPartnership(this.props.wickets, ball, overs, null, clickFrom);



    /*
    let overs = this.state.over;
    overs--;
    this.setState({
      over: overs
    });
    */
  }

addToRedux() {
  const { over, ball } = this.state;
  console.log({over});
  this.props.addOver({ over, ball });
  console.log(this.props.addOver({ over, ball }));
}

componentWillMount() {
  const { over, ball } = this.state;
  console.log(this.props.addOver({ over, ball }));
  this.props.addOver({ over, ball });
}

  render() {
    return (
      <Grid style={{width: '100%' }}>
        <Row size={12}>
        <Col style={styles.colCenter}>
            <H2 style={styles.textHeader}>OVERS:</H2>
          </Col>
        </Row>
        <Row size={12}>
          <Col style={styles.colCenter}>
              <Row>
              <Button style={{backgroundColor: 'transparent', marginTop: 'auto', marginBottom: 'auto'}} onPress={this.removeOver} title="Click me">
              <Icon name='remove' />
              </Button>
              <OverCount />
                <Button style={{backgroundColor: 'transparent', marginTop: 'auto', marginBottom: 'auto'}} onPress={this.addOver} title="Click me">
              <Icon name='add' />
              </Button>
          </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overs);
