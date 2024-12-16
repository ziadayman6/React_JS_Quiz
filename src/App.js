import * as React from "react";
import NavBar from "./NavBar";
import { createTheme } from "@mui/material/styles";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Main from "./Main";
import { useReducer } from "react";
import Quiz from "./Quiz";
import End from "./End";

const theme = createTheme({
  palette: {
    bars: {
      light: "#0288d1",
      dark: "#121212",
    },
    BackGround: {
      light: "#b3e5fc",
      dark: "#323232",
    },
  },
});

const questions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What's the name of the syntax we use to describe the UI in React components?",
    options: ["FBJ", "Babel", "JSX", "ES2015"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How does data flow naturally in React apps?",
    options: [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How to pass data into a child component?",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "When to use derived state?",
    options: [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: "What triggers a UI re-render in React?",
    options: [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    question: 'When do we directly "touch" the DOM in React?',
    options: [
      "When we need to listen to an event",
      "When we need to change the UI",
      "When we need to add styles",
      "Almost never",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question: "In what situation do we use a callback to update state?",
    options: [
      "When updating the state will be slow",
      "When the updated state is very data-intensive",
      "When the state update should happen faster",
      "When the new state depends on the previous state",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question:
      "If we pass a function to useState, when will that function be called?",
    options: [
      "On each re-render",
      "Each time we update the state",
      "Only on the initial render",
      "The first time we update the state",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "Which hook to use for an API request on the component's initial render?",
    options: ["useState", "useEffect", "useRef", "useReducer"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which variables should go into the useEffect dependency array?",
    options: [
      "Usually none",
      "All our state variables",
      "All state and props referenced in the effect",
      "All variables needed for clean up",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "An effect will always run on the initial render.",
    options: [
      "True",
      "It depends on the dependency array",
      "False",
      "In depends on the code in the effect",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "When will an effect run if it doesn't have a dependency array?",
    options: [
      "Only when the component mounts",
      "Only when the component unmounts",
      "The first time the component re-renders",
      "Each time the component is re-rendered",
    ],
    correctOption: 3,
    points: 20,
  },
];

const totalSum = questions.reduce((sum, current) => {
  return sum + current.points;
}, 0);

let initialState = {
  quiz: "ready",
  curQuestionIndex: 0,
  chosedAnswerIndex: null,
  points: 0,
  seconds: 300,
  history: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case "home":
      return { ...prevState, quiz: "ready" };
    case "start":
      return { ...prevState, quiz: "running" };
    case "next":
      return {
        ...prevState,
        curQuestionIndex: prevState.curQuestionIndex + 1,
        chosedAnswerIndex: null,
      };
    case "fakeNext":
      return {
        ...prevState,
        curQuestionIndex: prevState.curQuestionIndex + 1,
        chosedAnswerIndex: null,
      };
    case "previous":
      return {
        ...prevState,
        curQuestionIndex: prevState.curQuestionIndex - 1,
        chosedAnswerIndex: null,
      };
    case "finish":
      return { ...prevState, quiz: "finished" };
    case "answerF":
      return {
        ...prevState,
        chosedAnswerIndex: action.payload,
        history: [...prevState.history, action.payload],
      };
    case "answerT":
      return {
        ...prevState,
        chosedAnswerIndex: action.payload.index,
        points: prevState.points + action.payload.amount,
        history: [...prevState.history, action.payload.index],
      };
    case "tick":
      return {
        ...prevState,
        seconds: prevState.seconds - 1,
        quiz: prevState.seconds === 0 ? "finished" : prevState.quiz,
      };
    case "exit":
      return initialState;
    case "again":
      return { ...initialState, quiz: "running" };
    case "answers":
      return { ...prevState, quiz: "running" };
    default:
      throw new Error("unknown action");
  }
}

function App() {
  const [
    { quiz, curQuestionIndex, chosedAnswerIndex, points, seconds, history },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <>
      <NavBar
        total={totalSum}
        theme={theme}
        points={points}
        dispatch={dispatch}
      />
      <Main theme={theme}>
        {quiz === "ready" && (
          <Welcome
            theme={theme}
            dispatch={dispatch}
            curQuestionIndex={curQuestionIndex}
          />
        )}
        {quiz === "running" && (
          <Quiz
            theme={theme}
            curQuestionIndex={curQuestionIndex}
            dispatch={dispatch}
            questions={questions}
            chosedAnswerIndex={chosedAnswerIndex}
            seconds={seconds}
            history={history}
          />
        )}
        {quiz === "finished" && (
          <End theme={theme} dispatch={dispatch} points={points} />
        )}
      </Main>
      <Footer theme={theme} />
    </>
  );
}

export default App;
