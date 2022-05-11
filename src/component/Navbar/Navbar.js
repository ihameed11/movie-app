import React from 'react'

import { MdLocalMovies } from "react-icons/md";
import {NavBar ,Navbaritems} from './style'
function Navbar() {
  return (
      
    <NavBar>
        < Navbaritems>
      <MdLocalMovies/>
    <p>React Movie</p>
    
    </Navbaritems>
    </NavBar>
    
  )
}

export default Navbar
