import PropTypes from "prop-types";
import React from "react";

import { Input, Label } from "./contactFormLabeledInput.styles";

const ContactFormLabeledInput = ({
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
}) => {
  return (
    <Label htmlFor={name}>
      {" "}
      {name}
      <Input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
ContactFormLabeledInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ContactFormLabeledInput;
