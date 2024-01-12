import React,{useState} from 'react'
import "./NavBar.css";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    navigate('/');
  }

  const handleSignIn = () => {
    navigate('/login');
  }

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
          <a className='sign-in-link' onClick={handleClick}>Créer un compte</a>
          <a className='sign-up-link' onClick={handleSignIn}>connecter</a>
          <div className='hamburger' onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
        </div>
      </nav>

      {showMenu && (
         <Card style={{ width: '18rem' }} className="mobile-card">
        <div className='mobile-menu'>
          <a className='mobile-menu-link' href='#'>Créer un compte</a>
          <a className='mobile-menu-link' href='#'>Connecter</a>
        </div>
        </Card>
      )}
    </>
  )
}

export default NavBar
