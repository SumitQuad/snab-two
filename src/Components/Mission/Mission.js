import React from 'react';
import { Card } from 'react-bootstrap';
import "./Mission.css";

function Mission() {
    return (
        <>
            <section className="mission">
                <h1>Missions de PANDA</h1>
                <div className='row mission-row gap-2'>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                    <Card className='card-style-two'>
                            <Card.Body>
                                <h1>01</h1>
                                 <h3>Networking</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                    <Card className='card-style-two'>
                            <Card.Body>
                            <h1>02</h1>
                                 <h3>Partage</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                    <Card className='card-style-two'>
                            <Card.Body>
                            <h1>03</h1>
                                 <h3>Recrutemen</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                    <Card className='card-style-two'>
                            <Card.Body>
                            <h1>04</h1>
                                 <h3>Collaboratio</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                    <Card className='card-style-two'>
                            <Card.Body>
                            <h1>05</h1>
                                 <h3>Evénements</h3>
                                 <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                            </Card.Body>
                        </Card>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Mission
