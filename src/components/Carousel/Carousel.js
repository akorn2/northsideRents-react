/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Carousel } from 'react-bootstrap';

import imgKey1 from './keys1.jpg';
import apartment from './apartment2.jpg';

 /**
  TODO:
  http://stackoverflow.com/questions/38020380/trying-to-convert-react-bootstrap-carousel-to-es6-and-redux#38031714
  CreateClass to Component ES6
  */


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
          <img width={900} height={500} alt="900x500" src={apartment} />
          <Carousel.Caption />
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

export default CarouselClass;
