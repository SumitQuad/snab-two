import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <>
        <section className='footer'>
        <h1>Rejoignez notre communauté et aidez-nous à <br/> construire la première plateforme de networking <br/> en ligne à destination du marché africain!</h1>
        <div className='buttons'>
            <button>Se connecter</button>
            <button>Créer un compte</button>
        </div>
        <div className='links'>
            <div className='row'>
                <div className='col-lg-3 col-md-12 col-sm-12 footer-links'>
                  <h3>Page d'accueil</h3>
                  <ul>
                    <li>Missions de PANDA</li>
                    <li>Fonctionnalités</li>
                    <li>Découvrez les experts</li>
                    <li>Découvrez les organisations en Afrique</li>
                    <li>Offres d'emploi</li>
                    <li>Evénements à venir</li>
                    <li>Témoignages</li>
                    <li>Les fondateurs</li>
                  </ul>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 footer-links'>
                  <h3>pour les EXPERTS</h3>
                <ul>
                    <li>Découvrez les organisations en Afrique</li>
                    <li>Offres d'emploi</li>
                    <li>Travel Map</li>
                    <li>Evénements à venir</li>
                  </ul>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 footer-links'>
                      <h3>pour les organisations en Afrique</h3>
                    <ul>
                    <li>Découvrez les experts</li>
                    <li>Travel Map</li>
                    <li>Evénements à venir</li>
                  </ul>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 footer-links'>
                      <h3>Contact </h3>
                    <ul>
                    <li>Nous contacter</li>
                  </ul>
                    </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Footer
