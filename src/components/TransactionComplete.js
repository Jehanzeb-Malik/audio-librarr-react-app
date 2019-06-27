import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPlayLists} from "../actions";
import '../common/style.css';

class TransactionComplete extends React.Component {

  render() {
    return (
        <div className="ui segment mbl-container">
          <div className="ui four column grid mbl-container">
            <div className="ui container">
              <img className="tablet-icon" src="/tablet-icon.png" alt="icon"/>
            </div>
            <div className="ui text container">
              <h1 className="ui header mbl-header">STORE MEEZAN CREDITEASE</h1>
            </div>
            <div className="ui container">
              <div className="ui label mbl-label">Point of Sale - Request</div>
            </div>
            <div className="ui container">
              <div className="ui segment mbl-container-success">
                <h1>Success!</h1>
                <h3>You are authorized to deliver the products to Mr. Saad Haris. <br></br> Thank you.</h3>
                <div className="ui label mbl-label">Transaction ID: {window.location.pathname.split("/").pop()}</div>
              </div>
            </div>
            <div className="ui container">
              <Link to={`/`}>
                <div className="ui label mbl-label">Home Screen</div>
              </Link>
            </div>
          </div>
          <p></p>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playLists: state.playLists
  }
}

export default connect(mapStateToProps, {
  fetchPlayLists
})(TransactionComplete);