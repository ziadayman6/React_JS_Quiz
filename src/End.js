import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function End({ theme, dispatch, points }) {
  let percent = Math.round((points / 280) * 100);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="p"
        sx={{
          marginBottom: ["2vw", "0vw"],
          fontSize: ["13vw", "5vw"],
          fontWeight: 300,
          color: theme.palette.bars.light,
          textShadow: "1px 1px 0px black",
        }}
      >
        {percent >= 75 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="celebration"
              style={{ display: "block" }}
            >
              🎊
            </span>
            GREAT JOB
          </div>
        )}
        {percent >= 50 && percent < 75 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="thumbs up"
              style={{ display: "block" }}
            >
              👍
            </span>
            GOOD EFFORT
          </div>
        )}
        {percent >= 25 && percent < 50 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="needs work"
              style={{ display: "block", fontSize: { xs: "5vw" } }}
            >
              💡
            </span>
            NEEDS WORK
          </div>
        )}
        {percent < 25 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="try again"
              style={{ display: "block"}}
            >
              😣
            </span>
            TRY AGAIN
          </div>
        )}{" "}
      </Typography>
      <Typography
        variant="p"
        sx={{
          textAlign: "center",
          fontSize: ["5vw", "1.5vw"],
          fontWeight: [300, 400],
          color: theme.palette.bars.light,
        }}
      >
        You got {points} from 280 point in the quiz, keep going !❤️ ({percent}%)
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          gap: "10px",
          justifyContent: "center",
          width: "100%",
          marginTop: ["10vw","5vw"],
        }}
      >
        <Button
          variant="outlined"
          sx={{
            padding: ["1vw 4vw", "0.5vw 2vw"],
            fontWeight: [300, 400],
            fontSize: ["5vw", "1.3vw"],
            borderRadius: "30px",
            borderWidth: "2px",
            color: theme.palette.bars.light,
          }}
          onClick={() => {
            dispatch({ type: "answers" });
          }}
        >
          See Answers
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: ["1vw 4vw", "0.5vw 2vw"],
            fontWeight: [300, 400],
            fontSize: ["5vw", "1.3vw"],
            borderRadius: "30px",
            borderWidth: "2px",
            color: theme.palette.bars.light,
          }}
          onClick={() => {
            dispatch({ type: "exit" });
          }}
        >
          Exit
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: ["1vw 4vw", "0.5vw 2vw"],
            fontWeight: [300, 400],
            fontSize: ["5vw", "1.3vw"],
            borderRadius: "30px",
            borderWidth: "2px",
            color: theme.palette.bars.light,
          }}
          onClick={() => {
            dispatch({ type: "again" });
          }}
        >
          Try Again
        </Button>
      </Box>
    </Box>
  );
}
export default End;
