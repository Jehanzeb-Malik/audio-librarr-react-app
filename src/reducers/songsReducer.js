export const selectedSongReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload;
    default:
      return state;
  }
};