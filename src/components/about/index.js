import React from 'react';
import './index.scss';

const About = () => {
    return (
        <div>
            <div className='taws-information'>
                <div className='taws-information-what'>
                    <h1 className='taws-firacode-bold'>¿Qué es Taws?</h1>
                    <p>
                    Taws es por su naturaleza, un grupo estudiantil sin fines de lucro, sin discriminación de género, nacionalidad, raza, condición social, ideología, limitaciones físicas, mentales y/o sensoriales, que busca contribuir a la formación integral de jóvenes investigadores precursores en el desarrollo de tecnologías de la información.
                    </p>
                </div>
                <div className='taws-information-mision'>
                    <h1 className='taws-firacode-bold'>Misión</h1>
                    <p>
                    Contribuir a la formación de jóvenes investigadores, precursores en el desarrollo de aplicaciones web, fomentando el uso de nuevas tecnologías informáticas.
                    </p>
                </div>
                <div className='taws-information-vision'>
                    <h1 className='taws-firacode-bold'>Misión</h1>
                    <p>
                    Ser profesionales líderes y promotores de proyectos Informáticos en la Web y sus aplicaciones de acuerdo a las necesidades que la comunidad requiera satisfacer en el plano educativo, comercial y laboral en general.
                    </p>
                </div>
            </div>
            <div className='taws-about-img'>
                <img src='' alt=''/>
            </div>
        </div>
    )
}
export default About;