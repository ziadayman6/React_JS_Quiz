import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Welcome({ theme, dispatch }) {
  return (
    <Box
      component="div"
      sx={{
        width: ["100%", "75%"],
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5vw 0vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar
          src="logo512.png"
          alt="react"
          sx={{
            width: ["25vw", "15%"],
            height: ["25vw", "15%"],
            color: theme.palette.bars.light,
            transition: "3s",
            "&:hover": { transform: "rotate(180deg)" },
          }}
        />
        <Typography
          variant="p"
          sx={{
            fontWeight: 300,
            width: "80%",
            fontSize: ["9vw", "4vw"],
            textAlign: ["center", "left"],
            color: theme.palette.bars.light,
            textShadow: "1px 1px 0px black",
          }}
        >
          WELCOME TO OUR REACT QUIZ
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          p: { xs: 2, md: 1 },
          width: ["70%", "50%"],
          fontSize: ["3.5vw", "1.5vw"],
          borderRadius: "30px",
          borderWidth: "2px",
          color: theme.palette.bars.light,
        }}
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
}

export default Welcome;
