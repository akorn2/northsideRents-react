import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import s from './ContactButtons.css';
import credentials from '../Credentials/Credentials';

class ContactButtons extends React.Component {

  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#" header="Share Our Services" className={s.buttonHeader} />
        <ListGroupItem href="#" header="Facebook" bsStyle="info" />
        <ListGroupItem href="#" header="Yelp" bsStyle="info" />
        <ListGroupItem href="#" header="Contact Us" className={s.buttonHeader} />
        <ListGroupItem href="#" header="Phone" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-earphone" /> 773 474 3137</ListGroupItem>
        <ListGroupItem href="#" header="Fax" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-print" /> 773 474 3137</ListGroupItem>
        <ListGroupItem href="#" header="Email" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-envelope" /> northsideRents@gmail.com</ListGroupItem>
        <ListGroupItem href="#" header="Mail" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-home" /> 4556 N Street, Chicago Il 60625</ListGroupItem>
        {credentials}
      </ListGroup>
    );
  }
}

export default withStyles(s)(ContactButtons);
