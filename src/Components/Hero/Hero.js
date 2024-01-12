import React from 'react'
import "./Hero.css";

function Hero() {
    return (
        <>
        <section className="hero">
         <h1 className='text-center'>Nous réunissons experts du monde <br/> entier et organisations en Afrique</h1>
         <div className='row hero-row'>
            <div className='col-lg-4 hero-left'>
             <h1>Organisations en Afrique</h1>
             <p>Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet? Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
            </div>
            <div className='col-lg-4 hero-center'>
               <img src="./Images/Group 262.png" alt="hero"/> 
            </div>
            <div className='col-lg-4 hero-right'>
            <h1>Organisations en Afrique</h1>
             <p>Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet? Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p> 
            </div>
         </div>
        </section>
        </>
    )
}

export default Hero
