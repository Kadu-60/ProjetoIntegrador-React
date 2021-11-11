import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/templates/Header/Header";
import Footer from "./components/templates/Footer/Footer";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <>
    <Header/>
      <Router>
      <Routes/>
      </Router>
    <Footer/>

    </>
  );
}

export default App;
