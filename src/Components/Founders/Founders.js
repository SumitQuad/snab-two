import React from 'react'
import "./Founders.css";
import { Card } from 'react-bootstrap';

function Founders() {
    return (
        <>
            <section className='founders'>
                <h1>Les fondateurs</h1>
                <div className='row d-flex'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card className='card-style-three'>
                            <img src="./Images/ava (1).png" alt="img"/>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card className='card-style-three w-100'>
                            <img src="./Images/ava (2).png" alt="img"/>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card className='card-style-three w-100'>
                            <img src="./Images/ava (1).png" alt="img"/>
                        </Card>

                    </div>
                </div>
                <h4 style={{ fontWeight: 'bold' }}>“ Notre objectif est de capturer et partager les connaissances, les expertises et les réseaux afin de créer des opportunités illimitées, que ce soit pour les acteurs africains à la recherche des meilleures talents pour développer leurs activités ou pour les experts du monde entier qui souhaitent lancer des projets innovants en Afrique. “
                    Sarah et Abdoulaye</h4>
            </section>
        </>
    )
}

export default Founders
