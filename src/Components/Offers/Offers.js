import React from 'react';
import { Card } from 'react-bootstrap';
import "./Offers.css";

function Offers() {
    return (
        <>
            <section className="offers">
                <div className='row'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <h1>Offres d'emploi</h1>
                        <p>Publiez les offres d'emploi au sein de votre organisation auprès de notre communauté d'experts! Expert à la recherche d'un emploi en Afrique? Trouvez le job de vos rêves! </p>
                        <button>Publier ou postuler à une offre d'emploi</button>
                    </div>
                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <div className='row gutter-y-4'>
                            <div className='col-lg-6'>
                                <Card className='card-style-offers'>
                                    <h4>Lead Software Engineer</h4>
                                    <p>Madagascar </p>
                                    <div className='card-style-row'>
                                        <p>Full-time</p>
                                        <div className='offer-image'>
                                        <img src="./Images/ava.png" alt="Avatar" className='w-75' />
                                        <p className='mt-1'>Tubik Studio</p>
                                        </div>
                                        <p>1 Day Ago</p>
                                    </div>
                                   <button>Voir</button>
                                </Card>
                            </div>
                            <div className='col-lg-6'>
                            <Card className='card-style-offers'>
                                    <h4>Risk Analyst</h4>
                                    <p>Madagascar </p>
                                    <div className='card-style-row'>
                                        <p>Full-time</p>
                                        <div className='offer-image'>
                                        <img src="./Images/ava (3).png" alt="Avatar" className='w-75' />
                                        <p className='mt-1'>Bubba Gump</p>
                                        </div>
                                        <p>1 Day Ago</p>
                                    </div>
                                   <button>Voir</button>
                                </Card>
                            </div>
                            <div className='col-lg-6 mt-4'>
                            <Card className='card-style-offers'>
                                    <h4>Financial Analyst</h4>
                                    <p>Madagascar </p>
                                    <div className='card-style-row'>
                                        <p>Full-time</p>
                                        <div className='offer-image'>
                                        <img src="./Images/ava (4).png" alt="Avatar" className='w-75' />
                                        <p className='mt-1'>SP-holding</p>
                                        </div>
                                        <p>1 Day Ago</p>
                                    </div>
                                   <button>Voir</button>
                                </Card>
                            </div>
                            <div className='col-lg-6 mt-4'>
                            <Card className='card-style-offers'>
                                    <h4>Data Engineer</h4>
                                    <p>Madagascar </p>
                                    <div className='card-style-row'>
                                        <p>Full-time</p>
                                        <div className='offer-image'>
                                        <img src="./Images/ava (5).png" alt="Avatar" className='w-75' />
                                        <p className='mt-1'>SP-holding</p>
                                        </div>
                                        <p>1 Day Ago</p>
                                    </div>
                                   <button>Voir</button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offers
