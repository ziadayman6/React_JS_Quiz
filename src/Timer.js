import * as React from "react";
import { Typography } from "@mui/material";
import { useEffect } from "react";

function Timer({ dispatch, seconds }) {
  const min = Math.floor(seconds / 60);
  const second = seconds % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <Typography sx={{ fontSize: ["7vw", "3vw"], fontWeight: "light" }}>
      {min < 10 && "0"}
      {min}:{second < 10 && "0"}
      {second}
    </Typography>
  );
}

export default Timer;
