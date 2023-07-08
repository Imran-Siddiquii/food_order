import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { FoodDetails } from "./FoodDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/food/:id" exact element={<FoodDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
