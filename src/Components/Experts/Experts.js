import React from 'react';
import { Card } from 'react-bootstrap';
import "./Experts.css";

function Experts() {
    return (
        <>
            <section className='experts'>
                <div className='row'>
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
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <h3 className='mt-4'>“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</h3>
                        <div className='row align-items-end'>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-one'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/image.png" className="img-fluid p-0 m-0" />
                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-two'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/Expers3.png" />
                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 expert-card-three'>
                                <Card className='card-style-two'>
                                <Card.Img variant="top" src="./Images/Expers3.png"/>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experts
