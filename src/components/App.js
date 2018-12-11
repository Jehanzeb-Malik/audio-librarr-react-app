import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Playlists from './Playlists';
import Library from './Library';
import AudioPlayer from './AudioPlayer';
import Header from './Header';

const App = () => {
  return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Playlists}/>
            <Route path="/playlist/:id" component={Library}/>
            <AudioPlayer className="row" />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;