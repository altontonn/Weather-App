import React from 'react';
import { useNavigate } from 'react-router-dom';
import continents from '../country.json';

const red = continents[0].countries[0].countryName;
// eslint-disable-next-line
console.log(red)
const Country = () => {
  const navigate = useNavigate();
  return (
    <div className="continent">
      {continents.map((continent) => (
        <div className="count" key={continent.id} onClick={() => navigate(`/Details/${continent.countries[0].countryCities[0].cityName}`)}>
          <p className="text-primary">{continent.continent}</p>
          <ul>
            <li>
              {continent.countries[0].countryName}
              {' '}
              -
              {' '}
              {continent.countries[0].countryCities[0].cityName}
            </li>
            <li>
              {continent.countries[1].countryName}
              {' '}
              -
              {' '}
              {continent.countries[1].countryCities[0].cityName}
            </li>
            <li>
              {continent.countries[2].countryName}
              {' '}
              -
              {' '}
              {continent.countries[2].countryCities[0].cityName}
            </li>
            <li>
              {continent.countries[3].countryName}
              {' '}
              -
              {' '}
              {continent.countries[3].countryCities[0].cityName}
            </li>
            <li>
              {continent.countries[4].countryName}
              {' '}
              -
              {' '}
              {continent.countries[4].countryCities[0].cityName}
            </li>
            <li>
              {continent.countries[5].countryName}
              {' '}
              -
              {' '}
              {continent.countries[5].countryCities[0].cityName}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Country;
