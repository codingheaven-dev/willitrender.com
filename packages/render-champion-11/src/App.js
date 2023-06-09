import { createContext, useState } from "react";

import { Go, Square } from "./components";
import "./App.css";

const Context = createContext(0);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <Context.Provider value={counter}>
        <Go onClick={() => setCounter((v) => v + 1)} />
        <Squares>
          <Square>A</Square>
          <Square>B</Square>
          <Square>C</Square>
          <Square>D</Square>
        </Squares>
      </Context.Provider>
    </main>
  );
}

function Squares({ children }) {
  return <div className="squares">{children}</div>;
}

export default App;
