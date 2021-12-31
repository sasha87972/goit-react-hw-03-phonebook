import React from "react";
import { Label, Input } from "./filter.styles";
import PropTypes from "prop-types";
const Filter = ({ entry, onSearch }) => {
  return (
    <div>
      <Label htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={entry}
          onChange={onSearch}
        ></Input>
      </Label>
    </div>
  );
};
Filter.propTypes = {
  entry: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
export default Filter;
