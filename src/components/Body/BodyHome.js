import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import s from './body.css';

class BodyHome extends React.Component {
  render() {
    return (
      <div className={s.panels}>

        <Panel header={<h1>Find Your Next Apartment</h1>}>
          <p><bold>Chicago Northside Realty LLC</bold> represents hundreds of units.
          Share your search criteria to find your next apartment</p>

          <ButtonToolbar>
            <Button bsStyle="info">Apply Online</Button>
          </ButtonToolbar>

        </Panel>

        <Panel header={<h1>Fill your Property Vacancies</h1>}>
          <p>Get your vacancies filled with vetted renters fast!</p>

          <ButtonToolbar>
            <Button bsStyle="info">Call Broker</Button>
          </ButtonToolbar>

        </Panel>

        <Panel header={<h1>Buy Investment Properties</h1>}>
          <p>
            Get alerted when lucrative oppertunities come to market.
            With over 30 years of purchasing experience here in Chicagos
            Northside, we
          </p>

          <ButtonToolbar>
            <Button bsStyle="info">Call Broker</Button>
            <Button bsStyle="info">Newsletter of Deals</Button>
          </ButtonToolbar>

        </Panel>

      </div>
    );
  }
}

export default withStyles(s)(BodyHome);
