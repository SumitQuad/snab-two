import React from 'react'
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className='nav-left'>
          <p>EN - FR</p>
        </div>
        <div className='nav-center'>
          <h1> Bienvenue sur P   NDA</h1>
        </div>
        <div className='nav-right'>
          <a className='sign-in-link'>Créer un compte</a>
          <a className='sign-up-link'>connecter</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
