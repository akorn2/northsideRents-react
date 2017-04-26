import React from 'react';
import { Image } from 'react-bootstrap';

const ThumbnailBox = (props) => {
  const SliderImages = props.apartments.map(apartment => (
    <Image
      src={apartment.thumbnail}
      key={apartment.thumbnail}
      alt={`${apartment.header} ${apartment.neighborhood} north side realty in Chicago`}
      onClick={() => props.onSlideChange(apartment)}
    />
  ));

  return (
    <div>
      { SliderImages }
    </div>
  );
};

export default ThumbnailBox;

ThumbnailBox.propTypes = {
  apartments: React.PropTypes.shape.isRequired,
};

// ThumbnailBox.propTypes = {
//   apartments: React.PropTypes.shape.isRequired({
//     id: React.PropTypes.string.isRequired,
//     first_name: React.PropTypes.string.isRequired,
//     src: React.PropTypes.string.isRequired,
//   }),
// };

// ThumbnailBox.defaultProps = {
//   apartments: {
//     id: '1',
//     first_name: 'George',
//     src: '/assets/a.jpg',
//   },
// };

// AuthForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   errors: PropTypes.array,
// };
