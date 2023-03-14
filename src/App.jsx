import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home/Home";
import Error from "./views/Error/Error";
import Characters from "./views/Characters/Characters";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
