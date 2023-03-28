import "./App.css";
//components
import { NavBar } from "./Components/NavBar";
import AllUsers from "./Components/AllUsers";
import AddUsers from "./Components/AddUsers";
import EditUsers from "./Components/EditUser";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUsers />} />  
          <Route path="/edit/:id" element={<EditUsers />} />        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
