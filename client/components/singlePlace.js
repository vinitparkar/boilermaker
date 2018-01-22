import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSinglePlace, fetchActiveTrip} from '../store/singlePlace';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem'
import { Rating } from 'material-ui-rating';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

class SinglePlace extends Component {

      constructor(props) {
        super(props);
      }

      componentDidMount() {
          this.props.loadOneProduct(this.props.match.params.placeId);
          // this.props.loadTrip();
      }

      render() {
          const place = this.props.singlePlace.singlePlace;
          const style = {
              margin: 12,
          }

          return (
              <div>

                <div >
                  <h4>{place.name}</h4>
                  <h6 style={{color:"blue"}}>{place.formatted_address}</h6><br />
                </div>

                {/* <div className="gallery">
                    { place.photos ?
                      place.photos.map((photo, index) => (

                        <span key={index}>
                          <img src={photo.getUrl({maxWidth: 1000, maxHeight: 1000})} width='300' height='300' />
                        </span>

                      )) :
                      <img src={'no_image.png'} width='300' height='300'/>
                    }

                </div> */}

                { place.photos ?
                    <img src={place.photos[0].getUrl({maxWidth: 1000, maxHeight: 1000})} width='400' height='400'/>
                    :
                    <img src={'no_image.png'} width="100%"/>
                } <br /><br />
                <RaisedButton
                label="Add to Trip"
                primary={true} style={style}
                />

                <RaisedButton
                label="Back to Results"
                primary={true} style={style}
                onClick={this.props.history.goBack}
                />
                <br /><br />
                <h6> Customer Reviews </h6>

                <ul style={{listStyle: 'none'}}>
                  {
                    place.reviews && place.reviews.map((review) => (
                      <li key={review.author_name}>
                        <div>
                            <ListItem
                            disabled={true}
                            leftAvatar= {<Avatar>{review.author_name[0].toUpperCase()}</Avatar>}
                            >
                            <span>{review.author_name}</span>
                            </ListItem>
                            <Rating
                              onRate={() => console.log('onRate')}
                              value={review.rating}
                              max={5}
                              onChange={() => console.log('onChange')}
                              disabled
                            />
                        </div>
                        <div>
                            <span>{review.text}</span><br />
                        </div><br />
                      </li>
                    ))
                  }
                </ul>
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
          },
          loadTrip: function(){
              dispatch(fetchActiveTrip())
          }
      };
  };

  const SinglePlaceContainer = connect(mapState, mapDispatch)(SinglePlace)

  export default SinglePlaceContainer;
