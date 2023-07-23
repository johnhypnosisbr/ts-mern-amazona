import CompNavbar from "./components/Navbar";
import CompProducts from "./components/Products"

function App() {
  return (
    <div>
      <header>
        <CompNavbar />
      </header>
      <div className="d-flex flex-column vh-100">
        <main>
          <CompProducts />
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
