import About from "./Components/About/About";
import TextForm from "./Components/Form/TextForm";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/textForm"
          element={<TextForm heading="Enter the text to analyze below" />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
