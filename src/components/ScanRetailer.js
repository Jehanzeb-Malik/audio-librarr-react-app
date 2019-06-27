import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';

import { fetchPlayLists } from "../actions";
import '../common/style.css';

class ScanRetailer extends React.Component {

  render () {
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
              <QRCode className="mbl-qr-code" value={JSON.stringify({action: "read-retailer", id: "abcd1234"})} />
            </div>
            <div className="ui container">
              <div className="ui label mbl-label">Scan to process transaction</div>
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
})(ScanRetailer);