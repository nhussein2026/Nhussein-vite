import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/cursor/Cursor";

import nasser from "./data/Nasser";

function App() {
  return (
    <>
      <Cursor />
        <Navbar link={nasser.links} />

    </>
  );
}

export default App;
