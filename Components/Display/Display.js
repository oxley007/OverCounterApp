import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";
import { addOver } from "../../Actions/index";

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

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
          over: 0,
          ball: 0
        };
  }

  componentWillMount() {
    const { over, ball } = this.state;
    console.log(this.props.addOver({ over, ball }));
    this.props.addOver({ over, ball });
  }

  render() {
    return (
      <Text>
        {this.props.over}.{this.props.ball}
      </Text>
    );
  }
}

/*
onPress={() => this._handlePress()}
  title="Press Me"
  */

export default connect(mapStateToProps, mapDispatchToProps)(Display);
// export default connect(mapStateToProps)(ButtonTest);
