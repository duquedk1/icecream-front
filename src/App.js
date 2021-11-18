import { Container } from "react-bootstrap";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import IcecreamList from "./components/IcecreamList";
import Menu from "./components/Menu";
import FormCreate from "./components/FormCreate"
import { getIcecreamFetch } from "./api/icecream";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [icecreams, setIcecreams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getIcecreamFetch();
      console.log("DATA ", data);
      setIcecreams(data);
    }
    //const data = await getIcecreamAxios();
    fetchData();
  }, []);

  return (
    <Container>
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/icecreams"
            exact
            element={<IcecreamList list={icecreams} />}
          />
          <Route path="/icecream/create" exact element={<FormCreate />} />
          <Route
            path="/icecream/update"
            exact
            element={<h1>Actualizar helado</h1>}
          />
          <Route path="/icecream/delete" element={<h1>Eliminar Helado</h1>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
