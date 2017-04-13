import React from 'react';
import { Image } from 'react-bootstrap';

const ThumbailBox = (props) => {
  const SliderImages = props.apartments.map(apartment => (
    <Image
      src={apartment.src}
      alt={apartment.id}
      onClick={() => props.onSlideChange(apartment)}
    />
    ));

  return (
    <div>
      { SliderImages }
    </div>
  );
};

export default ThumbailBox;

ThumbailBox.propTypes = {
  apartments: React.PropTypes.string.isRequired,
};
