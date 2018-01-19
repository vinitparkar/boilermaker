import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
import { connect } from 'react-redux';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {fetchSearchPlaces} from '../store/search';

/**
 * COMPONENT
 */

class Home extends Component {

  constructor(props){
    super(props);
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
    this.setState({location: value});
  }

  handleGeoSuggestSelect(value) {
    this.setState({locationSuggestion: value})
  }

  handleRadiusChange(event) {
    this.setState({radius: event.target.value});
  }

  handleRestaurantChange(){
    let newValue = !this.state.restaurants;
    this.setState({restaurant: newValue});
  }

  handleBarChange() {
    let newValue = !this.state.bars;
    this.setState({bar: newValue});
  }

  handleNightClubChange() {
    let newValue = !this.state.nightClubs;
    this.setState({night_club: newValue});
  }

  handleParksChange() {
    let newValue = !this.state.parks;
    this.setState({park: newValue});
  }

  handleShoppingMallsChange(){
    let newValue = !this.state.shopping_mall;
    this.setState({shopping_mall: newValue});
  }

  handleMuseumsChange() {
    let newValue = !this.state.museums;
    this.setState({museum: newValue});
  }

  handleMovieTheatreChange() {
    let newValue = !this.state.movieTheatres;
    this.setState({movie_theater: newValue});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findPlaces(this.state);
    this.setState({ location: '', restaurant: false, radius: '', bar: false, night_club: false, park: false, shopping_mall: false, museum: false, movie_theater: false });
  }

  render() {

    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };

        return (
          <div className="create-trip">
            <h1>Trip Planner</h1>

            <div className="search-parameters">
                <ValidatorForm className="form-horizontal" onSubmit={this.handleSubmit}>
                  <label htmlFor="geoLocation">Create Trip</label>
                  <div className="form-group">
                    <Geosuggest
                    id="geoLocation"
                    name="location"
                    value={this.state.location}
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
                  <div style={styles.block} className="search-selection-paramters">
                      <Checkbox
                        label="Restaurants"
                        style={styles.checkbox}
                        value={this.state.restaurant}
                        onCheck={this.handleRestaurantChange}
                      /><br />
                      <Checkbox
                        label="Bars"
                        style={styles.checkbox}
                        value={this.state.bar}
                        onCheck={this.handleBarChange}
                      />
                      <Checkbox
                        label="Night Clubs"
                        style={styles.checkbox}
                        value={this.state.night_club}
                        onCheck={this.handleNightClubChange}
                      /><br />
                      <Checkbox
                        label="Parks"
                        style={styles.checkbox}
                        value={this.state.park}
                        onCheck={this.handleParksChange}
                      /><br />
                      <Checkbox
                        label="Shopping Malls"
                        style={styles.checkbox}
                        value={this.state.shopping_mall}
                        onCheck={this.handleShoppingMallsChange}
                      /><br />
                      <Checkbox
                        label="Museums"
                        style={styles.checkbox}
                        value={this.state.museum}
                        onCheck={this.handleMuseumsChange}
                      /><br />
                      <Checkbox
                        label="Movie Theatres"
                        style={styles.checkbox}
                        value={this.state.movie_theater}
                        onCheck={this.handleMovieTheatreChange}
                      /><br />
                    </div><br />
                  <div className="form-group">
                    <RaisedButton label="Submit" type="submit" style={{margin: 12}} />
                  </div>
                </ValidatorForm>

            </div>
        </div>
        );
  }
}

function mapStateToProps(storeState) {
    return {
        searchPlaces: storeState.searchPlaces
    }
}
function mapDispactToProps(dispatch) {
    return {
        findPlaces: function(searchPlaces) {
          dispatch(fetchSearchPlaces(searchPlaces));
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispactToProps)(Home);

export default HomeContainer;
