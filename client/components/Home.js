import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
//import { connect } from 'react-redux';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import TextField from 'material-ui/TextField';

/**
 * COMPONENT
 */

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
    this.handleGeoSuggestChange = this.handleGeoSuggestChange.bind(this);
    this.handleGeoSuggestSelect = this.handleGeoSuggestSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeoSuggestChange (value) {
    this.setState({location: value});
    console.log(this.state.location);
  }

  handleGeoSuggestSelect(value) {
    this.setState({location: value})
    console.log(value);
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {

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
                    /><br /><br />

                    {/* <TextValidator
                        hintText="Enter Title"
                        name="title"
                        id="reviewTitle"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={this.state.title}
                        onChange={this.handleTitle}
                    /><br /> */}

                    <TextValidator
                        name="rating"
                        hintText="Enter Rating from 1 to 5"
                        type="number"
                        validators={['required', 'minNumber:1', 'maxNumber:5']}
                        errorMessages={['this field is required', 'Rating cannot be less than 1', 'Rating cannot be greater than 5']}
                        value={this.state.rating}
                        onChange={this.handleRating}
                    /><br />

                    {/* <TextValidator
                        name="review"
                        multiLine={true}
                        hintText="Enter Review Text"
                        rows={4}
                        rowsMax={6}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={this.state.description}
                        onChange={this.handleDescription}
                    /> */}
                  </div>
                  <div className="form-group">
                      <button value="Submit" type="submit">submit</button>
                  </div>
                </ValidatorForm>
            </div>
        </div>
        );
  }
}


















// function mapStateToProps(storeState) {
//     return {
//         allProducts: storeState.allProducts,
//         currentUser: storeState.currentUser
//     }
// }
// function mapDispactToProps(dispatch, ownProps) {
//     return {
//         loadProducts: () => {
//             dispatch(fetchProducts())
//         },
//         addProductToCart: (userId, prodId, price) => {
//             dispatch(addProductToCart(userId, prodId, price, ownProps.history))
//         }
//     }
// }


// const HomeContainer = connect(mapStateToProps, mapDispactToProps)(Home);


// export default HomeContainer;
