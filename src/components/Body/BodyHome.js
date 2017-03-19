import React from 'react';
import { PageHeader } from 'react-bootstrap';

const HeaderText = (
  <PageHeader>
  Chicago Northside Reality
  </PageHeader>);
  /* <small>
     Rent or Buy</small> */

const BodyText = (
  <div>
    <h3>Rent or Buy</h3>
    <p>
  Chicago Northside Realty LLC manages many of the buildings you see featured on our website.
  We keep them clean so you can take pride in your home and enjoy a healthy lifestyle.
  We have helped thousands of renters find their perfect apartment.
  Studios, one bedrooms, two bedrooms, 3, 4, even 5 bedroom apartments and houses.
    </p>
    <ul>
      <li>search MLS for Rental apartments</li>
      <li>search MLS For Sale listings</li>
      <li>search available rentals</li>
    </ul>

    <h3>Property Management</h3>
    <p>
      Our property management team will take care of your investment property.
      With regular visits to your property, we maintain the common areas keeping
      them clean and safe of debris.
      We can arrange cleaning services, lawn maintenance, repairs and maintenance,
      lock out service, rent collecting and more.
      Everything and anything that needs to be done to maintain your property,
      keeping it safe, clean and profitable.
    </p>
  </div>
);

export { BodyText, HeaderText };
