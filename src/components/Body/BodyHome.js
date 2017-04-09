import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Panel } from 'react-bootstrap';
import s from './body.css';

class BodyHome extends React.Component {
  render() {
    return (
      <div className={s.panels}>

        <Panel header={<h3>Find Your Next Apartment</h3>}>
          <p><bold>Chicago Northside Realty LLC</bold> represents hundreds of units.
          Share your search criteria to find your next apartment</p>
        </Panel>

        <Panel header={<h3>Fill your Property Vacancies</h3>}>
          <p>Get your vacancies filled with vetted renters fast!</p>
        </Panel>

        <Panel header={<h3>Buy Investment Properties</h3>}>
          <p>Get your money to work for you with units to rent.</p>
        </Panel>

      </div>
    );
  }
}

export default withStyles(s)(BodyHome);
