import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
//import { Button, Icon, IconToggle } from 'react-native-material-ui';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from "react-redux";
import { addOver } from "../../Actions/index";
import { compose } from 'react-compose';

const mapDispatchToProps = dispatch => {
  return {
    addOver: over => dispatch(addOver(over))
  };
};

/*
Styling
*/
const styles = StyleSheet.create({
    rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
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
    }
});

const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};


class ButtonTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      over: 0,
      ball: 0
    };

    this.addBall = this.addBall.bind(this);

  }

addBall() {

  let balls = this.props.ball;
  let overs = this.props.over;

  console.log(balls);
  if (balls <= 5) {
  balls++;
  }
  this.setState({
    ball: balls,
    over: overs
  }, function () {
    const { over, ball } = this.state;
    console.log({ball});
    this.props.addOver({ over, ball });
    console.log(this.props.addOver({ over, ball }));
  });

}

  render() {
    return (

      <Grid>
        <Col size={1} style={{ backgroundColor: "#635DB7"}}>
          <Text>Remove</Text>
        </Col>
        <Col size={2} style={{ backgroundColor: "#00CE9F" }}>
        <Button rounded large style={styles.largeCircle} light onPress={this.addBall} title="Click me">
            <Icon name='add' style={styles.largeIcon} />
          </Button>
        </Col>
        <Col size={1} style={{ backgroundColor: "#DD9E2C" }}>
          <Text>Wicket</Text>
        </Col>
      </Grid>

    );
  }
}


/*
<View>
  <Button rounded large style={styles.largeCircle} light onPress={this.addBall} title="Click me">
      <Icon name='add' style={styles.largeIcon} />
    </Button>
</View>
*/

/*
onPress={() => this._handlePress()}
  title="Press Me"
  */
/*
  export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
    )(ButtonTest);
*/

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTest);
// export default connect(mapStateToProps)(ButtonTest);
