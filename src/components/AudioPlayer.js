import React from 'react';
import { connect } from 'react-redux';
import Player from 'react-h5-audio-player';

class AudioPlayer extends React.Component {

  render () {
    let path = '';
    if (this.props.selectedSong) {
      path = this.props.selectedSong.path;
    }

    return (
        <div className="ui segment">
          <Player
              autoPlay
              src={path}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(AudioPlayer);