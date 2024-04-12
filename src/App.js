import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container mb-5">
        <TextForm heading="Enter your text here:" />
      </div>
    </>
  );
}

export default App;
