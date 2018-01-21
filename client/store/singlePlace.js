//Action Types
const SINGLE_PLACE = 'SINGLE_PLACE';

//Action Creator
const getSinglePlace = (singlePlace) => {
  return {
    type: SINGLE_PLACE,
    singlePlace
  };
};

export const fetchSinglePlace = (placeId) => {
  return function(dispatch) {

      let service = new google.maps.places.PlacesService(document.createElement('div'));

      service.getDetails({
        placeId: placeId}, function(result, status) {
          //dispatch(getSinglePlace(result));
          console.log(result);
        });
  }
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SINGLE_PLACE:
      return action.singlePlace
    default:
      return state
  }
}

