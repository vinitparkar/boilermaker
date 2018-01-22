import axios from 'axios';

//Action Types
const SINGLE_PLACE = 'SINGLE_PLACE';
const ACTIVE_TRIP = 'ACTIVE_TRIP';

//Action Creator
const getSinglePlace = (singlePlace) => {
  return {
    type: SINGLE_PLACE,
    singlePlace
  };
};

const getActiveTrip = (activeTrip) => {
  return {
    type: ACTIVE_TRIP,
    activeTrip
  }
}

export const fetchSinglePlace = (placeId) => {
  return function(dispatch) {

      let service = new google.maps.places.PlacesService(document.createElement('div'));

      service.getDetails({
        placeId: placeId}, function(result, status) {
          dispatch(getSinglePlace(result));
        });
  }
};

export const fetchActiveTrip = (userId) => {
  return function(dispatch) {
    axios.get(`/api/users/${userId}/trips`)
    .then(res => dispatch(getActiveTrip(res.data)))
    .catch(console.error)
  }
};

const initialState = {
  singlePlace: {},
  activeTrip: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SINGLE_PLACE:
      return Object.assign({}, state, {singlePlace: action.singlePlace})
    case ACTIVE_TRIP:
    return Object.assign({}, state, {activeTrip: action.activeTrip})
    default:
      return state
  }
}

