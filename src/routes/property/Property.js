/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Col, Row, PageHeader } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SearchBox from '../../components/SearchBox/SearchBox';
import Slide from '../../components/Slider/Slider';
import BodyText from '../../components/Body/BodyProperty';
import ContactButtons from '../../components/ContactButtons/ContactButtons';
import s from './Property.css';

class Property extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Row className={s.root}>
        <Col xs={12} className={s.carousel} > { Slide } </Col>
        <Col xs={12} className={s.header}>
          <PageHeader>Chicago Northside Reality</PageHeader>
          <SearchBox />
        </Col>
        <Col xs={12} sm={8} className={s.body}> { BodyText } </Col>
        <Col xs={12} sm={4} className={s.sidebar}>
          <Row>
            <Col xs={12} className={s.contactButton}>
              <ContactButtons />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withStyles(s)(Property);
