import { combineReducers } from 'redux';
import player from './player';
import quiz from './quiz';

const rootReducers = combineReducers({ quiz, player });

export default rootReducers;
