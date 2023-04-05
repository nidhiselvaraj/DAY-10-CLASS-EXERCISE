import { Outlet, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";
const Dlayout = () => {
    return (
      <>
      <Navbar bg='secondary' variant="dark">
          <Container>
            <Navbar.Brand href="#home">
            </Navbar.Brand>
        <Nav>
          <ul>
              <Link to="/">Home</Link>
          </ul>
              <ul>
              <Link to="/About">About</Link>
              </ul>
              <ul>
              <Link to="/Destination">Destination</Link>
              </ul>
              <ul>
              <Link to="/Contact">Contact</Link>
              </ul>
              <ul>
              <Link to="/Form">Registration </Link>
              </ul>
  
        </Nav>
        </Container>
        </Navbar>
  
        <Outlet />
      </>
    )
  };
  
  export default Dlayout;