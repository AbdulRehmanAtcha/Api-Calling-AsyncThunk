// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/create" element={<Form/>}/>
      </Routes>
      {/* <Form /> */}
    </div>
  );
}

export default App;
