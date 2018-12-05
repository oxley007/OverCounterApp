// src/js/actions/index.js

//import { ADD_ARTICLE} from "../Constants/action-types";
//import { ADD_ARTICLETWO } from "../constants/action-types";
import { ADD_OVER, ADD_WICKET, ADD_STOPWATCH, ADD_PURCHASE } from "../Constants/action-types";

//export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
//export const addArticleTwo = articleTwo => ({ type: ADD_ARTICLETWO, payload: articleTwo });
export const addOver = over => ({ type: ADD_OVER, payload: over });
export const addWicket = wicketData => ({ type: ADD_WICKET, payload: wicketData });
export const addStopwatch = stopwatch => ({ type: ADD_STOPWATCH, payload: stopwatch });
export const addPurchase = purchase => ({ type: ADD_PURCHASE, payload: purchase });
