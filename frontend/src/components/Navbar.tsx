import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CompNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Navbar.Brand>
            <img className="icon" src="../img/tri.webp" />
            TriStore
          </Navbar.Brand>{" "}
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default CompNavbar;
