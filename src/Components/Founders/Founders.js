import React from 'react'
import "./Founders.css";
import { Card } from 'react-bootstrap';

function Founders() {
    return (
        <>
            <section className='founders'>
                <h1>Les fondateurs</h1>
                <div className='row d-flex'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card className='card-style-two'>
                            <img src="./Images/ava (1).png" alt="img" className="img-fluid" />
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card className='card-style-two w-100'>
                            <img src="./Images/ava (2).png" alt="img"/>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card className='card-style-two w-100'>
                            <img src="./Images/ava (1).png" alt="img"/>
                        </Card>

                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card className='card-style-two p-4'>
                        <p>“ Sarah et Abdoulaye sont tous deux consultants et managers dans un groupe international de conseil en stratégie et management. Ils se sont rencontrés au Luxembourg et ont beaucoup échangé sur leur expérience commune dans l'entrepreneuriat. Tout au long de leurs discussions, une chose très claire est vite apparue : leur passion pour l'entrepreneuriat et leur amour de l'Afrique, le continent dont ils sont tous deux originaires. “</p>
                        </Card>

                    </div>
                </div>
                <h4>“ Notre objectif est de capturer et partager les connaissances, les expertises et les réseaux afin de créer des opportunités illimitées, que ce soit pour les acteurs africains à la recherche des meilleures talents pour développer leurs activités ou pour les experts du monde entier qui souhaitent lancer des projets innovants en Afrique. “
                    Sarah et Abdoulaye</h4>
            </section>
        </>
    )
}

export default Founders
