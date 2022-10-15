import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAYDETAILS = 'weather-app/src/Redux/HomeActions/DISPLAYDETAILS';

const URL = 'https://api.weatherbit.io/v2.0/current?city=city&key=104126515dcd47909287677b53fb12dd&minutely';
const initialState = [];
export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAYDETAILS}/fulfilled`:
      return action.weather;
    default:
      return state;
  }
};

export const fetchCity = createAsyncThunk(DISPLAYDETAILS, async () => {
  await fetch(URL);
});
