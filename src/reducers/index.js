import { combineReducers } from 'redux';
import { playListsReducer, selectedPlayListReducer } from './playListsReducer';
import { selectedSongReducer } from './songsReducer';

export default combineReducers({
  playLists: playListsReducer,
  selectedPlayList: selectedPlayListReducer,
  selectedSong: selectedSongReducer
});
