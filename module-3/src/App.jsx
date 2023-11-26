import "./App.css";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
      <Header />
      <HelloWorld />
      <div className="random-class">
        <Header />
      </div>
      <HelloWorld />
      <Paragraph />
      <Paragraph />
    </>
  );
}

export default App;
