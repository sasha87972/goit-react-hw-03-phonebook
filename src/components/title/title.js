import PropTypes from "prop-types";
import React from "react";
import TitleItem from "../container/container.styles";

const Title = ({ title }) => {
  return <TitleItem>{title}</TitleItem>;
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
