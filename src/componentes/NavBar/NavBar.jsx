import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBar = () => {
  return (
    <header>
      <h1 className='title'>8-Bits</h1>
        <nav>
            <ul>
              <li>Computadoras</li>
              <li>Celulares</li>
              <li>Accesorios</li>
            </ul>
        </nav>
        <CardWidget/>
        
    </header>
  )
}

export default NavBar