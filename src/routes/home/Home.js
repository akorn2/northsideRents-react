/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import s from './Home.css';
import BodyText from '../../components/Body/BodyHome.js';
import SearchBox from '../../components/SearchBox/SearchBox.js';
import ContactButtons from '../../components/ContactButtons/ContactButtons.js';
import Carousel from '../../components/Carousel/Carousel';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <Grid className={s.root}>
        <Row className={s.rowie}>
          <Col xs={12} className={s.carousel} > <Carousel /> </Col>
          <Col xs={12} className={s.header}>
            <PageHeader>Chicago Northside Reality</PageHeader>
            { SearchBox }
            <div className={s.searchBox} >
              <Button bsSize="large">Buy</Button>
              <Button bsSize="large">Rent</Button>
              <h4>search properties</h4>
            </div>
          </Col>
          <Col xs={12} sm={8} className={s.body}> { BodyText } </Col>
          <Col xs={12} sm={4} className={s.sidebar}>
            <Row>
              <Col xs={12} className={s.contactButton}>
                { ContactButtons
                /* Why not work as <ContactList /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Home);
