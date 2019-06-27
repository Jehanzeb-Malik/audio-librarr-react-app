import React from 'react';

const Loader = (props) => {
  return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="ui active inverted dimmer mbl-container">
          <div className="ui text loader mbl-container">
            {props.text}
          </div>
        </div>
      </div>
  );
}

export default Loader;