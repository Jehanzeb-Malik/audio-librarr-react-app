import React from 'react';

import SongList from './SongList';
import PlayNotification from './PlayNotifications';

class Library extends React.Component {

  render () {
    return (
        <div className="ui grid">
          <div className="ten wide column">
            <SongList/>
          </div>
          <div className="six wide column">
            <PlayNotification/>
          </div>
        </div>
    );
  }
}

export default Library;