import audioLibrary from '../apis/audioLibrary';


export const fetchPlayLists = () => async (dispatch) => {
  const response = await audioLibrary.get('/playlists', {
    params: {
      skip: 0,
      limit: 10
    }
  });

  dispatch({
    type: 'FETCH_PLAYLISTS',
    payload: response.data
  });
};

export const fetchPlayListDetail = (id) => async (dispatch) => {
  if (!id) {
    dispatch({
      type: 'SELECT_PLAYLIST',
      payload: null
    });
  } else {
    const response = await audioLibrary.get(`/playlists/${id}`);

    dispatch({
      type: 'SELECT_PLAYLIST',
      payload: response.data
    });
  }
};

export const selectSong = (song) => {
  return {
    type: 'SELECT_SONG',
    payload: song
  }
};