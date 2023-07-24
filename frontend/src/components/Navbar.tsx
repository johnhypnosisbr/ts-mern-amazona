import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function CompNavbar() {
  return (
    <div>
      <Navbar bg="danger" variant="dark" className="fixed-top compnav">
        <Container>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Navbar.Brand>
              <img className="icon" src="../img/tri.webp" />
              TriStore
            </Navbar.Brand>{" "}
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div >
  );
}

export default CompNavbar;
