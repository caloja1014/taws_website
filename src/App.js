import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/about';
import Member from './components/members'
import Contact from './components/contact';
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState('Home');
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
      <Header itemsList={itemsList} selected={selected} setSelected={setSelected} />
      <div className='taws-app'>
        {
          selected === 'Home' &&
          <Home />
        }
        {
          selected === 'Nosotros' &&
          <About />}
        {
          selected === 'Miembros' &&
          <Member />}
        {
          selected === 'Contacto' &&
          <Contact />}
      </div>
    </div>
  );
}

export default App;
