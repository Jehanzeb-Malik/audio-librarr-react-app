import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {socket} from "../config/socket";

import {fetchPlayListDetail, selectSong} from "../actions";
import Loader from './Loader';

class SongList extends React.Component {

  componentWillMount() {
    this.props.fetchPlayListDetail();
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPlayListDetail(id);
  }

  onSongSelect(song) {
    this.props.selectSong(song);
    socket.emit('songSelected', {user: 'Anonymous', name: song.name});
  }

  renderSongList() {
    const {selectedPlayList} = this.props;

    if (!selectedPlayList) {
      return <Loader text="Loading songs"/>;
    } else if (selectedPlayList && !selectedPlayList.songs.length) {
      return <h4>No songs available in playlist!</h4>
    }

    return this.props.selectedPlayList.songs.map(song => {
      return (
          <div className="item" key={song._id}>
            <img
                alt=""
                className="ui mini image"
                src="/play-music.png"
                onClick={() => this.onSongSelect(song)} style={{cursor: "pointer"}}/>
            <div className="middle aligned content">
              <div
                  className="header"
                  onClick={() => this.onSongSelect(song)}
                  style={{cursor: "pointer"}}
              >{song.name}</div>
              Artists: {song.artists.join(' | ')}
            </div>
          </div>
      );
    });
  }

  render() {
    return (
        <div className="ui segment">
          <div className="ui divided list">
            {this.renderSongList()}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPlayList: state.selectedPlayList
  };
}

export default connect(mapStateToProps, {
  fetchPlayListDetail, selectSong
})(withRouter(SongList));