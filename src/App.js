import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IcecreamList from "./components/IcecreamList";
import { getIcecreamAxios, getIcecreamFetch } from "./api/icecream";
import "./App.css";

function App() {
  const [icecreams, setIcecreams] = useState([]);

  
  useEffect( async () => {
    
    //const data = await getIcecreamAxios();
    const data = await getIcecreamFetch()
    console.log("DATA ", data)
    setIcecreams(data);
  }, []);

  return (
    <Container>
      <IcecreamList list={icecreams} />
    </Container>
  );
}

export default App;
