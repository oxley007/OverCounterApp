import React, { Component } from 'react';
import { compose } from 'react-compose';

import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-switch';

import { connect } from "react-redux";
import { addPurchase } from "../../Actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addPurchase: purchase => dispatch(addPurchase(purchase))
  };
};
const mapStateToProps = state => {
  return { purchase: state.purchase.purchase };
};

const styles = StyleSheet.create({
    largeOk: {
      fontSize: 20,
      color: '#c471ed',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
    }
});


class Purchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchase: false,
    };
      this.addPurchase = this.addPurchase.bind(this);

  }


addPurchase(val) {
  this.setState({
    purchase: val,
  }, function () {
    const { purchase } = this.state;
    console.log({purchase});
    console.log(this.props.addPurchase({ purchase }));
    this.props.addPurchase({ purchase });
    console.log(this.props.addPurchase({ purchase }));
  });
}


  render() {
    return (
        <Row>
          <Text>inapp purchase test</Text>
          <Switch
  value={ this.state.purchase }
  onValueChange={(val) => this.addPurchase(val)}
/>
          </Row>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
