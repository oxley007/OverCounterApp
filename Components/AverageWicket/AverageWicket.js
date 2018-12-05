import React, { Component } from 'react';
import './AverageWicket.css';

/*
Native base and React native
*/
import { Container, Footer, Text, Icon, H2, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

class AverageWicket extends Component {
  constructor(props) {
    super(props);

    this.handleAssociatedButton = this.handleAssociatedButton.bind(this);
    this.overOneWicket = this.overOneWicket.bind(this);
  }


    overOneWicket() {

      if ((this.props.ball === 5 || this.props.ball === 6) && this.props.wickets > 0) {
        return (
          <p>Average partnership: {this.props.avgWicket} overs</p>
        )
        }
      else if ((this.props.ball === 3 || this.props.ball === 4) && this.props.wickets > 0) {
        return (
        <p>Fall of wickets (overs): {this.props.wicketBalls.join(", ")}</p>
      )
      }
      else if ((this.props.ball === 1 || this.props.ball === 2) && this.props.wickets > 0) {
        return (
        <p>Longest partnership: {this.props.highestPartnership} overs</p>
      )
      }
      else {
      return <p>Current Partnership: {this.props.currentPartnership}</p>
    }
  }

  handleAssociatedButton(e) {
    let associatedWith = e.target.value;
    console.log(associatedWith);
    this.props.storeAssociated(associatedWith);
  }

  render() {
    return (
      <Text className="App">
      {this.overOneWicket()}
    </Text>
    );
  }
}

export default AverageWicket;
