import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './SearchBox.css';

const HeaderText = (
  <div className={s.searchBox} >
    <a>Search</a>
  </div>
);
  /* <small>
     Rent or Buy</small> */

export default withStyles(s)(HeaderText);
