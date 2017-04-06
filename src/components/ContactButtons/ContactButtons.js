import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import s from './ContactButtons.css';
import credentials from '../Credentials/Credentials';

class ContactButtons extends React.Component {

  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#" header="Apartment Application" className={s.buttonHeader} />
        <ListGroupItem href="#" header="Application Forum" bsStyle="info" className={s.buttons} />
        <ListGroupItem href="#" header="Pay Online Visa/MasterCard/Venmo" bsStyle="info" className={s.buttons} />
        <ListGroupItem href="#" header="Find An Apartment" className={s.buttonHeader} />
        <ListGroupItem href="#" header="Receive Email of tailored Options" bsStyle="info" className={s.buttons} />
        <ListGroupItem href="#" header="Search Yourself" bsStyle="info" className={s.buttons} />
        <ListGroupItem href="#" header="Call A Broker" bsStyle="info" className={s.buttons} />
        <ListGroupItem href="#" header="Contact Us" className={s.buttonHeader} />
        <ListGroupItem href="#" header="Phone" bsStyle="info" className={s.buttons} > <Glyphicon glyph="glyphicon glyphicon-earphone" /> 773 474 3137</ListGroupItem>
        <ListGroupItem href="#" header="Fax" bsStyle="info" className={s.buttons} > <Glyphicon glyph="glyphicon glyphicon-print" /> 773 474 3137</ListGroupItem>
        <ListGroupItem href="#" header="Email" bsStyle="info" className={s.buttons} > <Glyphicon glyph="glyphicon glyphicon-envelope" /> northsideRents@gmail.com</ListGroupItem>
        <ListGroupItem href="#" header="Mail" bsStyle="info" className={s.buttons} > <Glyphicon glyph="glyphicon glyphicon-home" /> 4556 N Street, Chicago Il 60625</ListGroupItem>
        {credentials}
      </ListGroup>
    );
  }
}

export default withStyles(s)(ContactButtons);
