import React, { useEffect, useReducer } from "react";
import data from "./Components/data/data";
import Header from "./Components/header/Header";
import Story from "./Components/story/Story";
import Main from "./Components/main/Main";
import Text from "./Components/text/Text";
import "./App.css";

export const dataContext = React.createContext();

const initialState = {
  data: [],
  hasError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ASSINE_VALUES":
      return {
        ...state,
        data: action.playlode,
      };
    case "HAS_ERROR":
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "ASSINE_VALUES", playlode: data });
  }, []);

  return (
    <dataContext.Provider value={[state, dispatch]}>
      <div className="App">
        <div className="header-component">
          <Header />
        </div>
        <div className="fotter">
          <div className="main-component">
            <Story />
            <Main />
          </div>
          <div className="side-component">
            <Text />
          </div>
        </div>
      </div>
    </dataContext.Provider>
  );
}

export default App;
