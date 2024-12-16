import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { type } from "@testing-library/user-event/dist/type";

function NavBar({ total, theme, points, dispatch }) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.palette.bars.light,
        color: theme.palette.getContrastText(theme.palette.bars.light),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src="logo192.png"
            alt="react"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            REACT QUIZ
          </Typography>

          <Avatar
            src="logo192.png"
            alt="react"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QUIZ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography sx={{ p: 0 }} variant="p" component="p">
              {points}/{total} PTS
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
