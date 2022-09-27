import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/about';
import Member from './components/members'
function App() {
  const itemsList = [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Nosotros',
      link: '#'
    },
    {
      name: 'Miembros',
      link: '#'
    },
    {
      name: 'Contacto',
      link: '#'
    }
  ];
  return (
    <div className="App">
      <Header itemsList={itemsList} />
      <div className='taws-app'>
        <Member />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
