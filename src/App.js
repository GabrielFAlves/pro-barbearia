import './App.css';
import Banner from './components/Banner/Banner';
import Cv from './components/Container-Video/Cv';
import Nav from './components/Nav/Nav';
import Sobre from './components/Sobre/Sobre';
import ProdutosPage from './components/Produtos/ProdutosPage';
import Footer from './components/Footer/Footer';
import Burger from './components/Burguer/Burguer';

function App() {
  return (
    <>
      <Nav />
      <Burger />
      <Banner />
      <Sobre />
      <Cv />
      <ProdutosPage />
      <Footer />
    </>
  );
}

export default App;
