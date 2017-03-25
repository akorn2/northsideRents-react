import React from 'react';
import { Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './SearchBox.css';

class SearchBox extends React.Component {
  render() {
    return (
      <div className={s.searchBox} >
        <Button bsSize="small">View Available Listings</Button>
        <h5>View Map</h5>
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);
