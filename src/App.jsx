import "./App.css";
import Ace from "./components/Ace";
import Output from "./components/Output";

function App() {
  return (
    <>
      <div id="editor">
        <Ace />
        <Output />
      </div>
    </>
  );
}

export default App;
