import React from 'react';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import credentials from '../Credentials/credentials';

const ContactButtons = (
  <ListGroup>
    <ListGroupItem href="#" header="Share Our Services" active />
    <ListGroupItem href="#" header="Facebook" bsStyle="info" />
    <ListGroupItem href="#" header="Yelp" bsStyle="info" />
    <ListGroupItem href="#" header="Contact Us" active />
    <ListGroupItem href="#" header="Phone" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-earphone" /> 773 474 3137</ListGroupItem>
    <ListGroupItem href="#" header="Fax" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-print" /> 773 474 3137</ListGroupItem>
    <ListGroupItem href="#" header="Email" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-envelope" /> northsideRents@gmail.com</ListGroupItem>
    <ListGroupItem href="#" header="Mail" bsStyle="success"> <Glyphicon glyph="glyphicon glyphicon-home" /> 4556 N Street, Chicago Il 60625</ListGroupItem>
    {credentials}
  </ListGroup>
);

export default ContactButtons;
