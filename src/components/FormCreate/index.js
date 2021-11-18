import React from "react";
import { Form, Button } from "react-bootstrap";
import { createIcecream } from "../../api/icecream";

function index() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const icecream = {
      nombre: event.target[0].value,
      sabor: event.target[1].value,
      precio: parseInt(event.target[2].value),
    };
    createIcecream(icecream);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group constrolId="nombre">
        <Form.Label>Nombre del helado</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group constrolId="nombre">
        <Form.Label>Sabor del helado</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <Form.Group constrolId="nombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number"></Form.Control>
      </Form.Group>
      <Button variant="primary" type="Submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default index;
