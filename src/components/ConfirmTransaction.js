import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import QRCode from 'qrcode.react';

import {fetchPlayLists} from "../actions";
import Loader from './Loader';
import '../common/style.css';

class Playlists extends React.Component {

  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000)
  }

  render() {
    const { loading } = this.state;
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
            {loading ?
                <div className="ui container"><Loader text="Processing order..."/></div> :
                <div className="ui container">
                  <div className="ui container">
                    <QRCode className="mbl-qr-code" value={JSON.stringify({action: "confirm-transaction", id: window.location.pathname.split("/").pop()})}/>
                  </div>
                  <div className="ui container">
                    <div className="ui label mbl-label">Scan the QR-Code to complete transaction</div>
                  </div>
                </div>
            }
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
})(Playlists);