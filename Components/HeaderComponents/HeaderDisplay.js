import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import AvgSecondsDisplay from './AvgSecondsDisplay';
import Reset from './Reset';

/*
Redux imports
*/
import { connect } from "react-redux";
import { addStopwatch } from "../../Actions/index";
import { addPurchase } from "../../Actions/index";
import { addOver } from "../../Actions/index";

/*
Native base and react native
*/
import { Container, Footer, H2, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

/*
Redux constants
*/
const mapDispatchToProps = dispatch => {
 return {
   addStopwatch: stopwatch => dispatch(addStopwatch(stopwatch)),
   addPurchase: purchase => dispatch(addPurchase(purchase)),
   addOver: over => dispatch(addOver(over))
 };
};

const mapStateToProps = state => {
 return { over: state.over.over, ball: state.over.ball, secondsElapsed: state.stopwatch.secondsElapsed, avgBall: state.stopwatch.avgBall, avgSeconds: state.stopwatch.avgSeconds, purchase: state.purchase.purchase };
};

// Custom Styles
const styles = StyleSheet.create({
 colVerticleAlign: {
   marginTop: 10,
 }
});


class HeaderIndex extends Component {
 constructor(props) {
   super(props);
     this.state = {
       secondsElapsed: 0,
       laps: [],
       lastClearedIncrementer: null,
       avgBall: [],
       avgSeconds: 0,
       over: 0,
       ball: 0,
       purchase: false
     };


   this.incrementer = null;

   this.headerDisplay = this.headerDisplay.bind(this);
   this.handleStopClick = this.handleStopClick.bind(this);
   this.stopwatch = this.stopwatch.bind(this);


 }


 componentWillMount() {
   const { secondsElapsed, laps, lastClearedIncrementer, avgBall, avgSeconds, purchase, over } = this.state;
   //console.log(this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer }));
   console.log({ over });
   this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer,avgBall, avgSeconds });
   this.props.addPurchase({ purchase });
   this.props.addOver({ over });
 }


 stopwatch() {

   /*
   First clear the timer
   */
   clearInterval(this.incrementer);
   this.setState({
     secondsElapsed: 0,
     laps: []
   }, function () {
     const { secondsElapsed, laps } = this.state;
     //console.log({secondsElapsed, laps});
     this.props.addStopwatch({ secondsElapsed, laps });
     //console.log(this.props.addStopwatch({ secondsElapsed, laps }));
   });

   /*
   Then start the timer
   */

     this.incrementer = setInterval( () =>
         this.setState({
           secondsElapsed: this.state.secondsElapsed + 1
         },  function () {
           const { secondsElapsed } = this.state;
           //console.log({secondsElapsed });
           this.props.addStopwatch({ secondsElapsed });
           //console.log(this.props.addStopwatch({ secondsElapsed }));
         })
       , 1000);


 }

 handleStopClick() {
     clearInterval(this.incrementer);
     this.setState({
       lastClearedIncrementer: this.incrementer
     }, function () {
       const { secondsElapsed, laps, lastClearedIncrementer, avgBall, avgSeconds } = this.state;
       //console.log({secondsElapsed, laps, lastClearedIncrementer});
       this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer, avgBall, avgSeconds });
       //console.log(this.props.addStopwatch({ secondsElapsed, laps, lastClearedIncrementer }))
     });
   }



 headerDisplay() {
   console.log(this.props.purchase);
   console.log(this.props.over);
   if (this.props.resetDisplay === 1) {
   return (
     <Row>
       <Col size={1}>
         <Text>Are you sure?</Text>
       </Col>
       <Col size={1}>
         <Reset resetBuilder={this.props.resetBuilder}/>
       </Col>
       <Col size={1}>
         <Button light onPress={this.props.displayHeader}>
           <Text>Cancel</Text>
         </Button>
       </Col>
     </Row>
   )
 }
 else if (this.props.resetDisplay === 0 && this.props.purchase === true && this.props.over >= 10) {
 return (
     <Row>
       <Col size={1}>
         <Button rounded danger onPress={this.props.resetDisplaySet}>
           <Text>Reset</Text>
         </Button>
       </Col>
       <Col size={1}>
         <Text style={{textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: '#fff'}}>4DOT6</Text>
       </Col>
       <Col size={1} style={styles.colVerticleAlign}>
           <Row style={{height: 28}}>
             <Button rounded success >
               <Text>Upgrade</Text>
             </Button>
           </Row>
         </Col>
     </Row>
 )
}
 else {
   return (
     <Row>
       <Col size={1}>
         <Button rounded danger onPress={this.props.resetDisplaySet}>
           <Text>Reset</Text>
         </Button>
       </Col>
       <Col size={1}>
         <Text style={{textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: '#fff'}}>4DOT6</Text>
       </Col>
       <Col size={1} style={{}}>
           <Row style={{height: 28}}>
             <Col>
                 <Stopwatch />
               </Col>
               <Col style={{marginTop: 16}}>
                 <AvgSecondsDisplay />
             </Col>
           </Row>
           <Row style={{}}>
             <Text style={{fontSize: 8, height: 30, color: '#fff'}}>since last ball</Text>
           </Row>
         </Col>
     </Row>
   )
 }
 }

 render() {
   console.log(this.state.secondsElapsed + "seconds elapsed header index");
   return (
       <Grid >
         {this.headerDisplay()}
       </Grid>

   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderIndex);
