import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Row, Col, PageHeader } from 'react-bootstrap';
import s from './Home.css';

import BodyText from '../../components/Body/BodyHome.js';
import ContactButtons from '../../components/ContactButtons/ContactButtons.js';
import Slider from '../../components/Slider/Slider.js';

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
      <div className={s.root}>
        <Slider />
        <Row>
          <Col xs={12} sm={12} className={s.body}>
            <PageHeader>Your Key to living on the Northside</PageHeader>
          </Col>
          <Col xs={12} sm={8} className={s.body}>
            <BodyText />
          </Col>
          <Col xs={12} sm={4} className={s.sidebar}>
            <Row>
              <Col xs={12} className={s.contactButton}>
                <ContactButtons />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Home);
