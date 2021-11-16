
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { RoutesSite } from './routes'
import Header from './components/templates/Header/Header'
import Footer from './components/templates/Footer/Footer'




function App(props) {
  return (
    <>
    <Header/>
      <Router>
        <RoutesSite/>
      </Router>
      <Footer/>
      
    </>
  );
}

export default App;
