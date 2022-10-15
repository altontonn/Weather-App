import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { weatherReducer } from './HomeAction';
import { detailReducer } from './DetailsActions';

const reducer = combineReducers({
  weather: weatherReducer,
  detail: detailReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
