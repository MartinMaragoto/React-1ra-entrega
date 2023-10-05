import React from 'react'
import './App.css'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>

    <NavBar/>
    
      <div>
      </div>
      <ItemListContainer greeting = "Hi there! This site is under construction. We'll make a beautiful e-commerce here!" />
      
    </>
  )
}

export default App
