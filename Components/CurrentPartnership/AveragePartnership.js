import React, { Component } from 'react';

/*
Native base and React native
*/
import { Container, Footer, Text, Icon, H1, H2, H3, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

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

// Custom Styles
const styles = StyleSheet.create({
  textHeader: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  textDesc: {
    color: '#eee',
    fontWeight: '100',
    lineHeight: -50,
    marginTop: 0,
  },
  colCenter: {
    alignItems: 'center',
  },
  verticleRule: {
    borderRightColor: '#fff',
    borderRightWidth: 0.5,
    height: '100%',
  },
});

class averagePartnership extends Component {
  constructor(props) {
    super(props);

      this.state = {
            over: 0,
            ball: 0
          };

    this.currentPartnershipDisplay = this.currentPartnershipDisplay.bind(this);
  }

currentPartnershipDisplay() {
  console.log(this.props.over);
  console.log(this.props.ball);
  console.log(this.props.wickets);
  console.log(this.props.averagePartnership);
  const { classes } = this.props;
  if (this.props.averagePartnership < 10 && this.props.wickets > 1) {
    let avgPartnership = this.props.averagePartnership
    let remainderAvg = avgPartnership % 1;
    console.log(remainderAvg);
    remainderAvg *= 10;
    console.log(remainderAvg);
    let remainderAvgSecondDecimal = remainderAvg % 1;
    console.log(remainderAvgSecondDecimal);
    remainderAvgSecondDecimal *= 10;
    console.log(remainderAvgSecondDecimal);
    let decimalRound = Math.round(remainderAvgSecondDecimal * 100) / 100;
    console.log(decimalRound);
    if (decimalRound === 5) {
      return (
    <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>{this.props.averagePartnership}</H1>
      )
    }
    else {
    return (
  <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff', marginTop: 10}}>{this.props.averagePartnership}</H1>
    )
  }
  }
  else if (this.props.averagePartnership >= 10 && this.props.wickets > 1) {
    return (
  <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>{this.props.averagePartnership}</H1>
  )
  }
  else if (this.props.averagePartnership < 10 && this.props.wickets === 0) {
    return (
    <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>~</H1>
  )
  }
  else if (this.props.averagePartnership < 10 && this.props.wickets <= 1) {
    return (
    <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>{this.props.averagePartnership}</H1>
  )
  }
  else if (this.props.averagePartnership >= 10 && this.props.wickets <= 1) {
    return (
    <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>{this.props.averagePartnership}</H1>
  )
  }
}
  render() {
    return (
            <Col>
              <Row>
                <Col style={styles.colCenter}>
                  <Row>
                    <H3 style={styles.textHeader}>Average Partnership</H3>
                  </Row>
                  <Row>
                    <Text style={{fontSize: 55, color: '#fff'}}>
                      {this.currentPartnershipDisplay()}
                    </Text>
                  </Row>
                  <Row>
                    <Text style={styles.textDesc}>overs</Text>
                  </Row>
                </Col>
              <View style={styles.verticleRule} />
            </Row>
          </Col>

    );
  }
}

/*
<p className={classes.adviceSubText}>{this.props.avgAdvice}</p>
*/
export default connect(mapStateToProps, mapDispatchToProps)(averagePartnership);
