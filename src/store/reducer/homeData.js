import {GET_RECENT_CONTACT} from '../action/homeData';
import {RecentCont, Service} from '../../../StaticData/slideImages';

const initialState = {
  recentContact: RecentCont,
  services: Service,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENT_CONTACT:
      return {
        RecentContact: RecentCont,
      };

    case GET_RECENT_CONTACT:
      return {
        AlbumDetail: action.AlbumDetail,
      };
  }

  return state;
};
