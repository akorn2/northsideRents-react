/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Grid, Row, Col } from 'react-bootstrap';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} className={s.container}>
            <Grid className={s.root}>
              <Row>
                <Col className={s.flex}>
                  <Link className={s.brand} to="/">
                    <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="" height="120" alt="Northside Rents Property Management and Brokerage" />
                  </Link>
                  <Navigation />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Header);
