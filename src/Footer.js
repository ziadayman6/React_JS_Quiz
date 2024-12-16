import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Footer({ theme }) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.palette.bars.light,
        color: theme.palette.getContrastText(theme.palette.bars.light),
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Toolbar disableGutters>
          <Typography
            variant="p"
            noWrap
            component="p"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontSize: "1vw",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Copyrights 2024 REACT QUIZ by ZIAD AYMAN
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: ["2.5vw", "3.5vw"],
              //   letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Copyrights 2024 REACT QUIZ by ZIAD AYMAN.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
