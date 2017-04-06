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
import { Col, Thumbnail, Row, Button } from 'react-bootstrap';

import s from './Slider.css';
import img from './apartment.jpg';

// const css = `
//     .my-element {
//         max-height: 350px;
//     }
// `;

class Slider extends React.Component {
  render() {
    return (
      <Col xs={12}>
        <Thumbnail className={s.thumbnail} src={img} alt="242x200">
          <Row>
            <Col xs={6}>
              <h3>Northcenter Apartment</h3>
              <p>Conviently Located along Brown Line. Near strolls and parks</p>
              <p>
                <Button bsStyle="primary">More Images</Button>&nbsp;
                <Button bsStyle="default">View Map</Button>
              </p>
            </Col>
            <Col xs={6}>
              <h3>Featured Amenities</h3>
              <Col xs={4}>
                <ul>
                  <li>2 br, 2 bth</li>
                  <li>Avail April 1</li>
                  <li>$1995</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul>
                  <li>Near L</li>
                  <li>Near Buses</li>
                  <li>Laundry in Unit</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul>
                  <li>Parking</li>
                  <li>Pet Ok</li>
                  <li>4294 N. Awesome</li>
                </ul>
              </Col>
            </Col>
          </Row>
        </Thumbnail>
      </Col>
    );
  }
}

export default withStyles(s)(Slider);
