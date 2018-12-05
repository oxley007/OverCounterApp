import React, { Component } from 'react';
import Ball from '../Ball/Ball.js';
import OverBowledText from '../OverBowled/OverBowledText.js';
import AddWicket from '../AddWicket/AddWicket.js';
//import LinearGradient from 'react-native-linear-gradient';
import BallRemove from '../BallRemove/BallRemove.js';
//import AddWicket from '../AddWicket/AddWicket.js';
import { Container, Footer, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';
import { connect } from "react-redux";


/*
Material UI constants

const styles = theme => ({
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
});
*/

/*
Native Base StyleSheet
*/
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
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
    },
    largeIcon: {
      fontSize: 65,
      color: '#fff',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
});

/*
class Add extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Grid>
          <Row style={{height: 200, width; 25% }}>
          <BallRemove className="" wickets={this.props.wickets} stopwatch={this.props.stopwatch} highestPartnership={this.props.highestPartnership} />
          </Row>
          <Row style={{height: 200, width; 50% }}>
            <Ball className="" addBall={this.props.addBall} wickets={this.props.wickets} highestPartnership={this.props.highestPartnership} averagePartnerhsip={this.props.averagePartnerhsip}/>
          </Row>
          <Row style={{height: 200, width; 25% }}>
            <AddWicket className="" addWicket={this.props.addWicket} />
          </Row>
        </Grid>
      </Container>
    );
  }
}
*/


class Add extends Component {


  render() {

    return (

        <Grid>
          <Row size={2}>
            <OverBowledText />
          </Row>
          <Row size={10}>
            <Col size={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <BallRemove className="" wickets={this.props.wickets} stopwatch={this.props.stopwatch} highestPartnership={this.props.highestPartnership} />
            </Col>
            <Col style={styles.rowContainer} size={2}>
              <Ball className="" addBall={this.props.addBall} wickets={this.props.wickets} highestPartnership={this.props.highestPartnership} averagePartnerhsip={this.props.averagePartnerhsip}/>
            </Col>
            <Col size={1} style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
              <AddWicket addWicket={this.props.addWicket} />
            </Col>
          </Row>
        </Grid>

    );
  }
}

/*

<LinearGradient colors={['#4c669f', '#3b5998']} style={styles.linearGradient}>
  </LinearGradient>

*/


/*
class Add extends Component {
  render() {
    const { classes } = this.props;
    return (


          <Grid>
            <Col style={{ backgroundColor: '#000', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            <Text>Hello!!</Text>
          </Grid>

    );
  }
}
*/

//export default connect(mapStateToProps, mapDispatchToProps)(Add);


export default Add;
