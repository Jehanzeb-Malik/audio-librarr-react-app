import React from 'react';

const Loader = (props) => {
  return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="ui active inverted dimmer">
          <div className="ui text loader">
            {props.text}
          </div>
        </div>
      </div>
  );
}

export default Loader;