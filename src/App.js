import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import IcecreamList from "./components/IcecreamList";
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
      <IcecreamList list={icecreams} />
    </Container>
  );
}

export default App;
