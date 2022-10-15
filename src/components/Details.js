import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchCity } from '../Redux/DetailsActions';

function Details() {
  const { data } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { cityName } = useParams();

  useEffect(() => {
    dispatch(fetchCity(cityName));
  }, []);

  return (
    <div className="continent">
      <NavLink className="back" to="/"><img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Back-basic-elements-others-inmotus-design.png" alt="back" /></NavLink>
      <div className="count" key={data.id}>
        <p className="text-primary">{data.data}</p>
        <ul>
          <li>
            City:
            {' '}
            {data.city_name}
          </li>
          <li>
            Temp:
            {' '}
            {data.temp}
          </li>
          <li>
            Datetime:
            {' '}
            {data.datetime}
          </li>
          <li>
            Wind Speed:
            {' '}
            {data.wind_spd}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Details;
