import axios from 'axios';

//Action Types
const SEARCH_PLACES = "SEARCH_PLACES";

//Action Creator
const getPlaces = () => {
  return {
    type: SEARCH_PLACES
  };
};

export const fetchSearchPlaces = (searchPlaces) => {
  return function(dispatch) {
      let service = new google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch({
        location: searchPlaces.locationSuggestion.location,
        radius: 500,
        type: ['store']}, function(result, status) {
          console.log(result);
        });
  }
}


// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GOT_ALL_PRODUCT_REVIEWS:
//       return action.reviews
//     case WRITE_REVIEW:
//       return state.concat([action.review])
//     default:
//       return state
//   }
// }

