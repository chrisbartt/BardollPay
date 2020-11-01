export const GET_RECENT_CONTACT = 'GET_RECENT_CONTACT';

export const fetchPlaces = () => {
  return async dispatch => {
    const response = await fetch(
      'http://splendidone.website/public/index.php/api/popular-video',
      {
        method: 'POST',
      },
    );

    const responseData = await response.json();

    dispatch({type: GET_PLACE, placeList: responseData});
  };
};

export const fetchAlbumDetail = id => {
  return async dispatch => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
    );

    const responseData = await response.json();

    dispatch({type: SET_ALBUM_DETAIL, AlbumDetail: responseData});
  };
};
