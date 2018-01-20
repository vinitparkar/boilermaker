import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default function PlaceList(props) {

    const styles = {
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

  const places = props.searchPlaces;


    return (
      <div style={styles.root}>
        <GridList
                cols={2}
                cellHeight={200}
                padding={1}
                style={styles.gridList}
              >
          {places && places.map((place, index) => (
            <GridTile
              key={place.id}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={(index + 1)%3 ? 1 : 2}
              rows={(index + 1)%3 ? 1 : 2}
            >
              <img src={place.photos[0].getUrl() || 'no_image.png'} />
            </GridTile>
            ))}
        </GridList>
    </div>

    );
  }

// function mapStateToProps(storeState) {
//     return {
//         searchPlaces: storeState.searchPlaces
//           };
// }

// function mapDispactToProps(dispatch) {
//     return {
//         findPlaces: function(searchPlaces) {
//           dispatch(fetchSearchPlaces(searchPlaces));
//         }
//     };
// }

// const HomeContainer = connect(mapStateToProps, mapDispactToProps)(Home);

// export default HomeContainer;


