/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <Row className={s.root}>
        <Col className={s.container}>
          <span className={s.text} to="/">© Chicago Northside Reality</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/admin">Contact</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">Search Property</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/not-found">Search Rental</Link>
        </Col>
      </Row>
    );
  }
}

export default withStyles(s)(Footer);
