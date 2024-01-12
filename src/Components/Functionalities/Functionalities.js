import React from 'react';
import { Card } from 'react-bootstrap';
import "./Functionalities.css";

function Functionalities() {
    return (
        <>
        <section className="functionalities">
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
               <div className='functionality-card'>
                <h1>Fonctionnalités</h1>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
               <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>*</h1>
                                 <h3>Sélection de profils</h3>
                                 <p>Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! .</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>*</h1>
                                 <h3>Publication</h3>
                                 <p>Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée !</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>*</h1>
                                 <h3>Travel MAP</h3>
                                 <p>Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. </p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Card className='card-style-functionalities-bottom'>
                            <Card.Body>
                                <h1>*</h1>
                                 <h3>Filtres & recherche avancée</h3>
                                 <p>Ciblez vos recherches par secteur d'activité, pays et plus encore. </p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Card className='card-style-functionalities-bottom'>
                            <Card.Body>
                                <h1>*</h1>
                                 <h3>NOTIFICATIONS</h3>
                                 <p>Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.</p>
                            </Card.Body>
                        </Card>
                        </div>
                        </div>
               </div>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 d-flex flex-column'>
              <img src="./Images/Rectangle 111.png" alt="image"/>
              <button className='explore'>Explorer la Travel Map</button>
            </div>
        </div>

        </section>
        </>
    )
}

export default Functionalities
