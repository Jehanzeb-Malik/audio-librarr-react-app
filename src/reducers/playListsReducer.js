export const playListsReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      return action.payload;
    default:
      return state;
  }
};

export const selectedPlayListReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_PLAYLIST':
      return action.payload;
    default:
      return state;
  }
};