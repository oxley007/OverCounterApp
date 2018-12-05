// src/js/reducers/index.js

//import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_OVER, ADD_WICKET, ADD_STOPWATCH, ADD_PURCHASE } from "../Constants/action-types";
//import { ADD_ARTICLETWO } from "../constants/action-types";
import { combineReducers } from 'redux';


const initialState = {
  over: 0,
  ball: 0,
  secondsElapsed: 0,
  laps: [],
  lastClearedIncrementer: null,
  incrementer: null,
  avgBall: [],
  avgSeconds: 0,
  stop: 0,
  wicket: 0,
  purchase: false,
  /*wicketBall: [],
  partnerships: [],
  avgWicket: 0,
  highestPartnership: 0,
  currentPartnership: 0*/
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OVER:
    console.log('Add total');
    console.log(action.payload.ball);
    console.log(action.payload.over);
      return { ...state, over: {
        over: action.payload.over,
        ball: action.payload.ball
      }};
    case ADD_WICKET:
      console.log(action.payload.wicket);
      return {
        ...state, wicketData: {
          wicket: action.payload.wicket,
          /*wicketBall: [...state.wicketBall, action.payload],
          partnerships: [...state.partnerships, action.payload],
          avgWicket:  action.payload.avgWicket,
          highestPartnership: action.payload.highestPartnership,
          currentPartnership: action.payload.currentPartnership*/
      }};
    case ADD_STOPWATCH:
      //console.log(action.payload.secondsElapsed);
      //console.log(action.payload.incrementer);
      console.log(action.payload.avgSeconds);
      return { ...state, stopwatch: {
        secondsElapsed: action.payload.secondsElapsed,
        laps: [...state.laps, action.payload],
        lastClearedIncrementer: action.payload.lastClearedIncrementer,
        incrementer: action.payload.incrementer,
        avgBall: action.payload.avgBall,
        avgSeconds: action.payload.avgSeconds
      }};
    case ADD_PURCHASE:
    console.log(action.payload.purchase);
    console.log(action.payload);
    return {
      ...state, purchase: {
        purchase: action.payload.purchase,
    }};
    default:
      return state;
  }
};

/*
export default combineReducers({
  ADD_OVER, ADD_WICKET, ADD_STOPWATCH, ADD_PURCHASE
});
*/

/*
export default combineReducers({
  rootReducer,
  over: (state = {}) => state,
  wicketData: (state = {}) => state,
  stopwatch: (state = {}) => state,
  purchase: (state = {}) => state,
});
*/

export default rootReducer;
