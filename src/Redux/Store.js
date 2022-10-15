import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './HomeAction';
import { detailReducer } from './DetailsActions';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    detail: detailReducer,
  },
});
export default store;
