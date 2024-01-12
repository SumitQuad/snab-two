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
                    <div className='col-4'>
               <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-4'>
                        <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-4'>
                        <Card className='card-style-functionalities'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-4'>
                        <Card className='card-style-functionalities-bottom'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-4'>
                        <Card className='card-style-functionalities-bottom'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
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
