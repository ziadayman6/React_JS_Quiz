import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Timer from "./Timer";

function Quiz({
  theme,
  curQuestionIndex,
  dispatch,
  seconds,
  questions,
  chosedAnswerIndex,
  history,
}) {
  let currentQuestion = questions[curQuestionIndex];
  return (
    <>
      <IconButton
        disabled={curQuestionIndex === 0}
        color="primary"
        sx={{
          display: ["none", "block"],
          width: "4vw",
          height: "4vw",
          borderRadius: "50%",
          position: "absolute",
          left: "5%",
        }}
        onClick={() => {
          dispatch({ type: "previous" });
        }}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <Box
        component="div"
        sx={{
          width: ["100%", "80%"],
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: ["9vw", "2.5vw"],
            height: ["9vw", "2.5vw"],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            border: [
              `1px solid ${theme.palette.bars.light}`,
              `2px solid ${theme.palette.bars.light}`,
            ],
            fontSize: ["5vw", "1.5vw"],
            marginBottom: ["4vw", "1vw"],
            color: theme.palette.bars.light,
          }}
        >
          {curQuestionIndex + 1}
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ["10px", "10px"],
            marginBottom: ["10vw", "4vw"],
          }}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor:
                  curQuestionIndex >= i
                    ? theme.palette.bars.light
                    : "transparent",
                width:
                  curQuestionIndex === i ? ["3vw", "1vw"] : ["1.5vw", "0.5vw"],
                height:
                  curQuestionIndex === i ? ["3vw", "1vw"] : ["1.5vw", "0.5vw"],
                border: [
                  `1px solid ${theme.palette.bars.light}`,
                  `2px solid ${theme.palette.bars.light}`,
                ],
                borderRadius: "50%",
              }}
            ></Box>
          ))}
        </Box>
        <Typography
          sx={{
            fontSize: ["5vw", "1.5vw"],
            textAlign: "center",
            color: theme.palette.bars.light,
            textTransform: "uppercase",
            marginBottom: ["6vw", "3vw"],
          }}
        >
          {currentQuestion.question}
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: ["100%", "80%"],
            gap: ["15px", "10px"],
            justifyContent: "center",
            marginBottom: ["4vw", "2vw"],
          }}
        >
          {currentQuestion.options.map((option, i) => (
            <Button
              disabled={
                chosedAnswerIndex || history[curQuestionIndex] !== undefined
              }
              key={i}
              sx={{
                width: ["100%", "49%"],
                borderRadius: "30px",
                padding: ["3vw", "1vw"],
                "&.Mui-disabled": {
                  color:
                    (chosedAnswerIndex &&
                      chosedAnswerIndex === i + 1 &&
                      "white") ||
                    (i === currentQuestion.correctOption &&
                      chosedAnswerIndex &&
                      chosedAnswerIndex !== currentQuestion.correctOption + 1 &&
                      "green") ||
                    (history[curQuestionIndex] !== undefined &&
                      history[curQuestionIndex] === i + 1 &&
                      "white") ||
                    (i === currentQuestion.correctOption &&
                      history[curQuestionIndex] !== undefined &&
                      history[curQuestionIndex] !==
                        currentQuestion.correctOption + 1 &&
                      "green"),
                },
                outline:
                  (i === currentQuestion.correctOption &&
                    chosedAnswerIndex &&
                    chosedAnswerIndex !== currentQuestion.correctOption + 1 &&
                    "2px solid green") ||
                  (history[curQuestionIndex] !== undefined &&
                    i === currentQuestion.correctOption &&
                    history[curQuestionIndex] !==
                      currentQuestion.correctOption + 1 &&
                    "2px solid green"),
                backgroundColor:
                  (chosedAnswerIndex &&
                    chosedAnswerIndex === i + 1 &&
                    i === currentQuestion.correctOption &&
                    "green") ||
                  (chosedAnswerIndex &&
                    chosedAnswerIndex === i + 1 &&
                    i !== currentQuestion.correctOption &&
                    "red") ||
                  (history[curQuestionIndex] !== undefined &&
                    history[curQuestionIndex] === i + 1 &&
                    i === currentQuestion.correctOption &&
                    "green") ||
                  (history[curQuestionIndex] !== undefined &&
                    history[curQuestionIndex] === i + 1 &&
                    i !== currentQuestion.correctOption &&
                    "red"),
              }}
              variant="outlined"
              onClick={() => {
                if (i === currentQuestion.correctOption) {
                  dispatch({
                    type: "answerT",
                    payload: { index: i + 1, amount: currentQuestion.points },
                  });
                } else {
                  dispatch({ type: "answerF", payload: i + 1 });
                }
              }}
            >
              {option}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: ["100%", "80%"],
            color: theme.palette.bars.light,
            display: "flex",
            justifyContent: ["space-between", "center"],
            alignItems: "center",
          }}
        >
          <IconButton
            disabled={curQuestionIndex === 0}
            color="primary"
            sx={{
              display: ["block", "none"],
              width: "11vw",
              height: "11vw",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch({ type: "previous" });
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "7vw" }} />
          </IconButton>
          <Timer dispatch={dispatch} seconds={seconds} />
          <IconButton
            disabled={
              !chosedAnswerIndex && history[curQuestionIndex] === undefined
            }
            color="primary"
            sx={{
              display: ["block", "none"],
              width: "11vw",
              height: "11vw",
              borderRadius: "50%",
            }}
            onClick={() => {
              if (curQuestionIndex === questions.length - 1) {
                dispatch({ type: "finish" });
              } else {
                dispatch({ type: "next" });
              }
            }}
          >
            {curQuestionIndex === questions.length - 1 ? (
              <DoneIcon sx={{ fontSize: "7vw" }} />
            ) : (
              <ArrowForwardIosIcon sx={{ fontSize: "7vw" }} />
            )}
          </IconButton>
        </Box>
      </Box>
      <IconButton
        disabled={
          !chosedAnswerIndex && history[curQuestionIndex] === undefined
        }

        color="primary"
        sx={{
          display: ["none", "block"],
          width: "4vw",
          height: "4vw",
          borderRadius: "50%",
          position: "absolute",
          right: "5%",
        }}
        onClick={() => {
          if (curQuestionIndex === questions.length - 1) {
            dispatch({ type: "finish" });
          } else {
            dispatch({ type: "next" });
          }
        }}
      >
        {curQuestionIndex === questions.length - 1 ? (
          <DoneIcon fontSize="large" />
        ) : (
          <ArrowForwardIosIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
}

export default Quiz;
