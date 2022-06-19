import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Articulos from "./pages/Articulos";
import AddArticle from "./articles/AddArticle";
import EditArticle from "./articles/EditArticle";
import ViewArticle from "./articles/ViewArticle";
import Transaccion from "./pages/Transaccion";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/transaccion" element={<Transaccion />} />
          <Route exact path="/articulos" element={<Articulos />} />
          <Route exact path="/articulos/addarticle" element={<AddArticle />} />
          <Route exact path="/articulos/editarticle/:id" element={<EditArticle />} />
          <Route exact path="/articulos/viewarticle/:id" element={<ViewArticle />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
