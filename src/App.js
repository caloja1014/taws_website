import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
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
        <Home />
      </div>
    </div>
  );
}

export default App;
