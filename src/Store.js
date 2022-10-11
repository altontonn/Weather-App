import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducer from './Redux/HomeAction';

const reducer = combineReducers({
  weather: weatherReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
