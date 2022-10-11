// key = '104126515dcd47909287677b53fb12dd';

const DISPLAYWEATHER = 'weather-app/src/Redux/HomeActions/DISPLAYWEATHER';
const initialState = [];

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAYWEATHER}/fulfilled`:
      return action.payload.weather;
    default:
      return state;
  }
};
export default weatherReducer;
