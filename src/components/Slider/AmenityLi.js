import React from 'react';

const AmenityLi = (props) => {
  if (props.value === true) {
    return (
      <li> {props.title}: Yes </li>
    );
  } else if (typeof props.value === 'string' || props.value instanceof String) {
    return (
      <li> {props.title}: ${props.value} </li>
    );
  } else if (!isNaN(props.value) && props.value !== false) {
    return (
      <li> {props.title}: {props.value} </li>
    );
  }
  return false;
};

export default AmenityLi;

AmenityLi.propTypes = {
  value: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};
