import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import RaisedButton from 'material-ui/RaisedButton';
import {fetchSearchPlaces} from '../store/search';
import Map from './map';
/**
 * COMPONENT
 */

class Home extends Component {

  constructor(props){
    super(props);
    this.map = null;
    this.state = {
      location: '',
      locationSuggestion: '',
      radius: '',
      restaurant: false,
      bar: false,
      night_club: false,
      park: false,
      shopping_mall: false,
      museum: false,
      movie_theater: false
    }

    this.handleGeoSuggestChange = this.handleGeoSuggestChange.bind(this);
    this.handleGeoSuggestSelect = this.handleGeoSuggestSelect.bind(this);
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
    this.handleBarChange = this.handleBarChange.bind(this);
    this.handleNightClubChange = this.handleNightClubChange.bind(this);
    this.handleParksChange = this.handleParksChange.bind(this);
    this.handleShoppingMallsChange = this.handleShoppingMallsChange.bind(this);
    this.handleMuseumsChange = this.handleMuseumsChange.bind(this);
    this.handleMovieTheatreChange = this.handleMovieTheatreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeoSuggestChange (value) {
    this.setState({locationSuggestion: value});
  }

  handleGeoSuggestSelect(value) {
    this.setState({locationSuggestion: value})
  }

  handleRadiusChange(event) {
    this.setState({radius: event.target.value});
  }

  handleRestaurantChange(){
    let newValue = !this.state.restaurant;
    this.setState({restaurant: newValue});
  }

  handleBarChange() {
    let newValue = !this.state.bar;
    this.setState({bar: newValue});
  }

  handleNightClubChange() {
    let newValue = !this.state.night_club;
    this.setState({night_club: newValue});
  }

  handleParksChange() {
    let newValue = !this.state.park;
    this.setState({park: newValue});
  }

  handleShoppingMallsChange(){
    let newValue = !this.state.shopping_mall;
    this.setState({shopping_mall: newValue});
  }

  handleMuseumsChange() {
    let newValue = !this.state.museum;
    this.setState({museum: newValue});
  }

  handleMovieTheatreChange() {
    let newValue = !this.state.movie_theater;
    this.setState({movie_theater: newValue});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findPlaces(this.state);
    this.setState({ location: '', locationSuggestion: '', restaurant: false, radius: '', bar: false, night_club: false, park: false, shopping_mall: false, museum: false, movie_theater: false });
  }

  render() {

    const styles = {
      block: {
        maxWidth: 250
      },
      checkbox: {
        marginBottom: 16
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
      }
    };

    const places = this.props.searchPlaces;

        return (
          <div>
            { !this.props.showPlaces ?

              <div className="create-trip">
                <h1>Trip Planner</h1>
                  <div id="map" />
                  <div className="search-parameters" id="selectionParameters">
                    <ValidatorForm className="form-horizontal" onSubmit={this.handleSubmit}>
                      <div className="form-group">

                        <Geosuggest
                          id="geoLocation"
                          name="location"
                          value={this.state.locationSuggestion}
                          onChange={this.handleGeoSuggestChange}
                          onSuggestSelect={this.handleGeoSuggestSelect}
                        />

                        <TextValidator
                            name="radius"
                            hintText="Enter Search Radius in meters"
                            type="number"
                            validators={['required', 'minNumber:1', 'maxNumber:5000']}
                            errorMessages={['this field is required', 'Radius cannot be less than 1', 'Radius cannot be greater than 5000']}
                            value={this.state.radius}
                            onChange={this.handleRadiusChange}
                        /><br />
                      </div>

                      <div className="search-selection-paramters">

                          <input
                          type = "checkbox"
                          name = "restaurants"
                          value = {this.state.restaurant}
                          onClick = {this.handleRestaurantChange}
                          /> <span> Restaurants</span><br />

                          <input
                          type = "checkbox"
                          name = "bars"
                          value = {this.state.bar}
                          onClick = {this.handleBarChange}
                          /> <span> Bars </span><br />

                          <input
                          type = "checkbox"
                          name = "Night Clubs"
                          value = {this.state.night_club}
                          onClick = {this.handleNightClubChange}
                          onChange = {this.handleNightClubChange}
                          /> <span> Night Clubs </span><br />

                          <input
                          type = "checkbox"
                          name = "Parks"
                          value = {this.state.park}
                          onClick = {this.handleParksChange}
                          onChange = {this.handleParksChange}
                          /> <span> Parks </span><br />

                          <input
                          type = "checkbox"
                          name = "Shopping Malls"
                          value = {this.state.shopping_mall}
                          onClick = {this.handleShoppingMallsChange}
                          onChange = {this.handleShoppingMallsChange}
                          /> <span> Shopping Malls </span><br />

                          <input
                          type = "checkbox"
                          name = "Museums"
                          value = {this.state.museum}
                          onClick = {this.handleMuseumsChange}
                          onChange = {this.handleMuseumsChange}
                          /> <span> Museums </span><br />

                          <input
                          type = "checkbox"
                          name = "Movie Theatres"
                          value = {this.state.movie_theater}
                          onClick = {this.handleMovieTheatreChange}
                          onChange = {this.handleMovieTheatreChange}
                          /> <span> Movie Theatres </span><br />

                      </div><br />

                      <RaisedButton label="Submit" type="submit" style={{margin: 30}} />

                      </ValidatorForm>
                  </div>
              </div> :
              <div >
                  <ul style={{listStyle:"none"}}>
                  {places && places.map((place) => (
                    <Link to={`/${place.place_id}`} key={place.id}>
                        <li key={place.id}>
                            {place.name}<br />
                            { place.photos ?
                              <img src={place.photos[0].getUrl({maxWidth: 1000, maxHeight: 1000})} width='400' height='400'/> :
                              <img src={'no_image.png'} width='400' height='400'/>
                            }
                        </li><br />
                    </Link>
                  ))};
                  </ul>
              </div>
            }
        </div>
    );
  }
}

function mapStateToProps(storeState) {
    return {
        searchPlaces: storeState.searchResults.searchPlaces,
        showPlaces: storeState.searchResults.showPlaces
          };
}

function mapDispactToProps(dispatch) {
    return {
        findPlaces: function(searchPlaces) {
          dispatch(fetchSearchPlaces(searchPlaces));
        }
    };
}

const HomeContainer = connect(mapStateToProps, mapDispactToProps)(Home);

export default HomeContainer;
