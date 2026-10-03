import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header className="container">
        <Navbar />
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
