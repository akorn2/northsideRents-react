/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Col, Row, Button, Image } from 'react-bootstrap';

import ThumbnailBox from './ThumbnailBox.js';

import s from './Slider.css';
import apartments from './pictures.json';


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments,
      sliderImage: apartments[0],
    };
  }

  render() {
    return (
      <Row className={s.slider}>

        <Col xs={12}>

          <Image
            src={this.state.sliderImage.src}
            className={s.slide}
          />

          <div className={s.ThumbnailBox}>
            <ThumbnailBox
              apartments={this.state.apartments}
              onSlideChange={sliderImage => this.setState({ sliderImage })}
            />
          </div>

        </Col>

        <Col xs={6} className={s.details}>
          <h3>Northcenter Apartment</h3>
          <p>Conviently Located along Brown Line. Near strolls and parks</p>
          <p>
            <Button bsStyle="primary">More Images</Button>&nbsp;
            <Button bsStyle="default">View Map</Button>
          </p>
        </Col>

        <Col xs={6} className={s.details}>
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

    );
  }
}

export default withStyles(s)(Slider);
