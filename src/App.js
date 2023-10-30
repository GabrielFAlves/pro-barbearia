import './App.css';
import Banner from './components/Banner/Banner';
import Cv from './components/Container-Video/Cv';
import Prod from './components/Produtos/Produtos';
import Nav from './components/Nav/Nav';
import Sobre from './components/Sobre/Sobre';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Sobre />
      <Cv />
      <Prod />
    </>
  );
}

export default App;
