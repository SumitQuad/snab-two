import React from 'react';
import { Card } from 'react-bootstrap';
import "./Panda.css";

function Experts() {
    return (
        <>
            <section className='panda'>
            <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h3 className='mt-4'>“PANDA nous donne accès aux meilleurs talents dans leur domaine d'activité et à de réelles perspectives de collaboration!  ”</h3>
                        <div className='row align-items-end'>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-three'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/Panda2.png" className="img-fluid p-0 m-0" />
                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-two'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/Panda2.png" />
                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-one'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/Panda1.png"/>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="heading-line d-flex justify-content-start">
                            <div className="custom-line">
                                <div className="small-line"></div>
                            </div>

                            <div className="custom-line">
                                <div className="small-line"></div>
                            </div>

                            <div className="custom-line">
                                <div className="small-line"></div>
                            </div>
                        </div>
                    <h1 className='mt-4'>Découvrez les experts</h1>
                        <p>Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!</p>
                        <button>Voir tout</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experts
