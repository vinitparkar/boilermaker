import axios from 'axios';

//Action Types
const SEARCH_PLACES = "SEARCH_PLACES";

//Action Creator
const getPlaces = (searchResults) => {
  return {
    type: SEARCH_PLACES,
    searchResults
  };
};

export const fetchSearchPlaces = (searchPlaces) => {
  return function(dispatch) {

      let type = [], keys = Object.keys(searchPlaces);
      for (let i in keys) {
        if (searchPlaces[keys[i]] === true) {
          type.push(keys[i]);
        }
      }

      let service = new google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch({
        location: searchPlaces.locationSuggestion.location,
        radius: +searchPlaces.radius,
        type: type}, function(result, status) {
          dispatch(getPlaces(result));
        });
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_PLACES:
      return action.searchResults
    default:
      return state
  }
}

