import React, { useState } from "react";
import MyTodoList from "./components/MyTodoList/MyTodoList";
import { AppContext } from "./context";
import "./App.scss";

function App() {

  const [theme, setTheme] = useState("light");

  return (
      <container className={`app ${theme}`}>
          <AppContext.Provider value={{ theme, setTheme }}>
              <MyTodoList />
          </AppContext.Provider>
      </container>
  );
}

export default App;
