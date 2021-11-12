
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesSite } from './routes'
import Home from './pages/Home/Home';
import Busca from './pages/Busca/Busca';
import Login from './pages/Login/Login';
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import PedidoFinalizado from './pages/PedidoFinalizado/PedidoFinalizado';
import Produto from './pages/Produto/Produto';
import Teste from './pages/Teste';
import Header from './components/templates/Header/Header'
import Footer from './components/templates/Footer/Footer'



function App(props) {
  return (
    <>
      <Header />
      <br/>
      <Router>
        <RoutesSite />
      </Router>
      <br/>
      <Footer />
    </>
  );
}

export default App;
