import React, { Component } from 'react';

/*
Native base and React native
*/
import { Container, Footer, Text, Icon, H1, H3, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

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

class HighestPartnerhsip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
        <Row>
          <Col style={styles.colCenter}>
            <Row>
              <H3 style={styles.textHeader}>Highest Partnership</H3>
            </Row>
            <Row>
              <H1 style={{fontSize: 40, lineHeight: 40, color: '#fff'}}>
                {this.props.highestPartnership}
              </H1>
            </Row>
            <Row>
              <Text style={styles.textDesc}>overs</Text>
            </Row>
          </Col>
      </Row>
      </Col>
    );
  }
}



/*
<p className={classes.adviceSubText}>{this.props.highAdvice}</p>
*/

export default HighestPartnerhsip;
