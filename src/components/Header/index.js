import React, { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';



const Header = ({ itemsList, selected, setSelected }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header" >
      {((isSmallScreen && !isNavVisible) || selected !== 'Home') && <img src={require("../assets/logo.png")} className="Logo" alt="logo" />}
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          {
            itemsList.map((item, index) => {
              const { name, link } = item;
              return (
                <a
                  className={selected === name ? 'taws-firacode-bold' : 'taws-firacode-medium'}
                  onClick={() => {
                    setSelected(name);
                    if (isSmallScreen) {
                      toggleNav();
                    }
                  }}
                  href={link} key={index} >
                  {name}
                </a>
              )
            })
          }
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <FontAwesomeIcon icon={faBars} color={'#ffffff'} />
      </button>
    </header>
  );
};
export default Header;