import React from 'react';
import continent from '../country.json';

const cont = continent[0].countries[0].countryName;
// eslint-disable-next-line
console.log(cont);
const City = () => (
  <div className="country">
    {continent.map((city) => (
      <div className="countryName" key={continent.id}>
        <ul>
          <li>
            {city.countries[0].countryName}
            {' '}
            -
            {' '}
            {city.countries[0].countryCities[0].cityName}
          </li>
        </ul>
      </div>
    ))}
  </div>
);

export default City;
