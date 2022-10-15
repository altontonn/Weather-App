import React from 'react';

function Home() {
  return (
    <div>
      <div className="inputContainer">
        <input
          type="text"
          className="input"
          placeholder="Enter a city"
        />
      </div>
      <div className="sectionOne">
      </div>
      <div className="divider">More Details</div>
      <div className="sectionTwo">
        <div className="left">
          <p>Date and Time</p>
        </div>
        <div className="middle">
          <p>Timezone</p>
        </div>
        <div className="right">
          <p>
            MPH
          </p>

          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
