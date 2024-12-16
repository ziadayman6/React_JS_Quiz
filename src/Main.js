import * as React from "react";
import Box from "@mui/material/Box";

function Main({ theme, children }) {
  return (
    <Box
      component="section"
      sx={{
        p: [7, 10],
        minHeight: "60vh",
        bgcolor: theme.palette.BackGround.light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default Main;
