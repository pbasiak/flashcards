import { Box } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

function MenuItemIcon({ children }) {
  return (
    <Box mr="8px" alignItems="center" display="flex">
      {children}
    </Box>
  );
}

MenuItemIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuItemIcon;
