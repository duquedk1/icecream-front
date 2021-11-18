import React from 'react'
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Nav>
                <Nav.Item>
                    <Link to="/icecreams" className="nav-link">Helados</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/icecream/create" className="nav-link">Crear Helado</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/icecream/update" className="nav-link">Actualizar Helado</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/icecream/delete" className="nav-link">Eliminar Helados</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Menu
