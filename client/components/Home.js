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
      restaurants: false
    }
    this.handleGeoSuggestChange = this.handleGeoSuggestChange.bind(this);
    this.handleGeoSuggestSelect = this.handleGeoSuggestSelect.bind(this);
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeoSuggestChange (value) {
    this.setState({location: value});
    //console.log(this.state.location);
  }

  handleGeoSuggestSelect(value) {
    this.setState({locationSuggestion: value})
    console.log(this.state.location, this.state.locationSuggestion);
  }

  handleRadiusChange(event) {
    this.setState({radius: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findPlaces(this.state);
    this.setState({ location: '', restaurants: false, radius: '' })
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
                        hintText="Enter Search Radius"
                        type="number"
                        validators={['required', 'minNumber:1', 'maxNumber:10']}
                        errorMessages={['this field is required', 'Radius cannot be less than 1', 'Radius cannot be greater than 10']}
                        value={this.state.radius}
                        onChange={this.handleRadiusChange}
                    /><br />
                  </div>
                  <div style={styles.block} className="search-selection-paramters">
                      <Checkbox
                        label="Restaurants"
                        style={styles.checkbox}
                      />
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
          dispatch(fetchSearchPlaces());
        }
    }
}


const HomeContainer = connect(mapStateToProps, mapDispactToProps)(Home);


export default HomeContainer;
