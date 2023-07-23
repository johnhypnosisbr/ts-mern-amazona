import { Container } from "react-bootstrap";
import CompNavbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <CompNavbar />
      </header>
      <div className="d-flex flex-column vh-100">
        <main>
          <Container className="mt-3">
            <Outlet />
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
