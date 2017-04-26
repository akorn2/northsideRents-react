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
import apartments from './apartments.json';

// import img from './apartment.jpg';
// import img1 from './apartment1.jpg';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments,
      activeApartment: apartments[0],
    };
  }

  render() {
    // const Amenities = this.state.activeApartment.amenities;
    const a = this.state.activeApartment;
    // const b = this.state.activeApartment.amenities;
    return (
      <Row className={s.slider}>

        <Col xs={12}>

          <Image
            src={this.state.activeApartment.slider}
            className={s.slide}
          />

          <div className={s.ThumbnailBox}>
            <ThumbnailBox
              apartments={this.state.apartments}
              onSlideChange={activeApartment => this.setState({ activeApartment })}
            />
          </div>

        </Col>

        <Col xs={6} className={s.details}>
          <h3>{a.header}</h3>
          <p>{a.description}</p>
          <p>
            <Button bsStyle="primary">More Images</Button>&nbsp;
            <Button bsStyle="default">View Map</Button>
          </p>
        </Col>

        <Col xs={6} className={s.details}>
          <h3>Featured Amenities</h3>

          <Col xs={4}>
            <ul>
              <li>Near L</li>
              <li>Near Buses</li>
              <li>Laundry In Building</li>
              <li>Laundry in Unit</li>
            </ul>
          </Col>
          <Col xs={4}>
            <ul>
              <li>Near Buses</li>
              <li>Laundry In Building</li>
              <li>Laundry in Unit</li>
            </ul>
          </Col>
          <Col xs={4}>
            <ul>
              <li>Near Buses</li>
              <li>Laundry in Unit</li>
            </ul>
          </Col>


        </Col>

      </Row>

    );
  }
}

export default withStyles(s)(Slider);

// <ul>
//   <AmenityLi value={a.nearL} />
//   {a.nearL ? <li> Near L</li> : null }
//   {a.nearBuses ? <li> Near Buses</li> : null }
//   {a.laundryInUnit ? <li> Laundry in Unit</li> : null }
//   {a.laundryInBuilding ? <li> Laundry in Unit</li> : null }
// </ul>


// <AmenityLi value={a.nearL} />
// {a.nearL ? <li> Near L</li> : null }
// {a.nearBuses ? <li> Near Buses</li> : null }
// {a.laundryInUnit ? <li> Laundry in Unit</li> : null }
// {a.laundryInBuilding ? <li> Laundry in Unit</li> : null }

// { Amenities.map(props => (
//   <AmenityLi
//     title={props.key}
//     value={props.value}
//   />
// )) }
