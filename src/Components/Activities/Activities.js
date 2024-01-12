import React from 'react';
import "./Activities.css";

function Activities() {
    return (
        <>
            <section className='activities'>
                <h1>Top 5 des domaines d’activités porteurs en Afrique </h1>
                <div className='row activities-content'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                     <img src="./Images/circle img.png" alt="image" className='w-75'/>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                     <ul>
                        <li>Les énergies renouvelables</li>
                        <li>Les énergies renouvelables</li>
                        <li>Les énergies renouvelables</li>
                        <li>Les énergies renouvelables</li>
                        <li>Les énergies renouvelables</li>
                     </ul>
                     <button>Suivant</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Activities
