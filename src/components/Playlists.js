import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPlayLists } from "../actions";
import Loader from './Loader';

class Playlists extends React.Component {

  componentDidMount= async () => {
    this.props.fetchPlayLists();
  }

  renderPlayListCards () {
    if (!this.props.playLists) {
      return <Loader text="Loading playlist"/>;
    }
    if (!this.props.playLists.length) {
      return <div className="row">No playlists found</div>;
    }
    return this.props.playLists.map(playList => {
      return (
          <div className="column" key={playList._id}>
            <div className="ui fluid card">
              <div className="image">
                <img alt="" src="/album-cover.jpg" />
              </div>
              <div className="content">
                <Link to={`/playlist/${playList._id}`}>
                  <p className="header">{playList.name}</p>
                </Link>
                <div className="extra">
                  {playList.songs.length} songs
                </div>
              </div>
            </div>
          </div>
      );
    });
  }
  render () {
    return (
        <div className="ui segment">
          <div className="ui four column grid">
            {this.renderPlayListCards()}
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