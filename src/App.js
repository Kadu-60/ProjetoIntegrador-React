import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import './App.css';
import Home from './pages/Home/Home';
import Busca from './pages/Busca/Busca';
import Login from './pages/Login/Login';
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import PedidoFinalizado from './pages/PedidoFinalizado/PedidoFinalizado';
import Produto from './pages/Produto/Produto';
import Teste from './pages/Teste';

function App(props) {
  return (
    <>
      <Header/>
      <Router>
        <Routes/>
      </Router>
      <Footer/>
    {/* <Login/> */}
    </>
  );
}

export default App;
