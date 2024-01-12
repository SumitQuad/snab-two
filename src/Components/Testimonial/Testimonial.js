import React from 'react';
import "./Testimonial.css";

function Testimonial() {
    return (
        <>
           <section className="testimonial">
         <div className='row hero-row'>
            <div className='col-lg-4 hero-left'>
             <h1>Témoignages</h1>
             <p>Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet? Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
            </div>
            <div className='col-lg-4 hero-center'>
               <img src="./Images/Testimonial.png" alt="hero"/> 
            </div>
            <div className='col-lg-4 hero-right'>
            <h4>Very Nice Atmosphere and experience with “Welcome to PANDA”</h4>
             <p>Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut pulvinar orci.</p> 
            </div>
         </div>
        </section>
        </>
    )
}

export default Testimonial;
