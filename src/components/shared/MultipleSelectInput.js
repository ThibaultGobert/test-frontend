import React from "react";
import PropTypes from 'prop-types';
import { Dropdown } from "semantic-ui-react";

const MultipleSelectInput = ({options, onChange, label, name, placeholder}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Dropdown name={name} placeholder={placeholder} fluid multiple selection options={options} onChange={onChange} />
  </div>
);

MultipleSelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired
};

export default MultipleSelectInput;
