import AppBar from "./AppBar";
import React from "react";
import LayoutContainer from "./LayoutContainer";
import Box from "@mui/material/Box";

const index = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", }}>
        <AppBar />
        <LayoutContainer>{children}</LayoutContainer>
      </Box>
    </>
  );
};

export default index;
