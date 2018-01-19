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
      axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyApG379H7jFGOBP_1a0sqmZUoGPu1klK8Q`)
      .then(res => console.log(res.data))
      .catch(console.error)
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

