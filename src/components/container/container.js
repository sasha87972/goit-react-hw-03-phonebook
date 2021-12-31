import React from "react";
import TitleItem from "./container.styles";
import PropTypes from "prop-types";

const Container = ({ title, children }) => {
  return (
    <div>
      <TitleItem>{title}</TitleItem>
      {children}
    </div>
  );
};
Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Container;
