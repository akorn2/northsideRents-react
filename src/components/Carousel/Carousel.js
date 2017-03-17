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
import { Carousel, Button } from 'react-bootstrap';
import s from './Carousel.css';
import imgKey1 from './keys1.jpg';

const wellStyles = { maxWidth: 350, margin: '0 auto 10px' };
const carouselCaption = { marginBottom: '220px' };
const cssButton = { fontSize: '22px' };

const buttonsInstance = (
  <div className="" style={wellStyles}>
    <Button bsStyle="success" bsSize="large" style={cssButton} block>Available Properties</Button>
    <Button bsStyle="success" bsSize="large" style={cssButton} block>Available Rentals</Button>
  </div>
);

class CarouselClass extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={(selectedIndex, e) => this.handleSelect(selectedIndex, e)}
      >
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={imgKey1} />
          <Carousel.Caption className="s.carouselCaption" style={carouselCaption}>
            { buttonsInstance }
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={imgKey1} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={imgKey1} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default withStyles(s)(CarouselClass);
