import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSinglePlace} from '../store/singlePlace';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class SinglePlace extends Component {

      // constructor(props) {
      //     super(props)
      //     this.state = {
      //         title: '',
      //         rating: '',
      //         description: ''
      //     }
      //     this.handleTitle = this.handleTitle.bind(this)
      //     this.handleRating = this.handleRating.bind(this)
      //     this.handleDescription = this.handleDescription.bind(this)
      //     this.handleSubmit = this.handleSubmit.bind(this)
      // }

      // handleTitle(event) {
      //     this.setState({ title: event.target.value })
      // }

      // handleRating(event) {
      //     this.setState({ rating: event.target.value })
      // }

      // handleDescription(event) {
      //     this.setState({ description: event.target.value })
      // }

      // handleSubmit(event) {
      //     event.preventDefault()
      //     this.props.postUserReview(this.state, this.props.match.params.prodId, this.props.history, this.props.currentUser)
      //     this.setState({ title: '', rating: '', description: '' })
      // }

      componentDidMount() {
          this.props.loadOneProduct(this.props.match.params.placeId);
      }

      render() {
          const place = this.props.singlePlace;
          const style = {
              margin: 12,
          }

          console.log(place);

          return (
                <div>
                  <Card>
                      <img className='singlePlace' src={place.imageUrl} />
                        <div style={{ margin: 40 }}>
                          {/* <CardTitle title={product.title} subtitle={"In Stock: " + product.quantity}/>
                          <CardText>{place.description}</CardText> */}

                          {/* <RaisedButton onClick={() => addProductToCart(this.props.currentUser.id, product.id, product.price)} label="Add to Cart" /> */}

                      </div>
                  </Card>
                </div>

          )
      }
  }


  const mapState = (state) => {
      return {
          singlePlace: state.singlePlace
      };
  };

  const mapDispatch = (dispatch) => {
      return {
          loadOneProduct: function (placeId) {
              dispatch(fetchSinglePlace(placeId))
          }
      };
  };

  const SinglePlaceContainer = connect(mapState, mapDispatch)(SinglePlace)

  export default SinglePlaceContainer;
