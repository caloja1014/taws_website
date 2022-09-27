import React from 'react';
import './index.scss';

const About = () => {
    return (
        <div className='taws-about'>
            <div className='taws-information'>
                <div className='taws-information-what'>
                    <h1 className='taws-firacode-bold'>¿Qué es Taws?</h1>
                    <p className='taws-firacode-medium'>
                        Taws es por su naturaleza, un grupo estudiantil sin fines de lucro, sin discriminación de género, nacionalidad, raza, condición social, ideología, limitaciones físicas, mentales y/o sensoriales, que busca contribuir a la formación integral de jóvenes investigadores precursores en el desarrollo de tecnologías de la información.
                    </p>
                </div>
                <div className='taws-about-m-v'>
                <div className='taws-information-mision'>
                    <h1 className='taws-firacode-bold'>Misión</h1>
                    <p className='taws-firacode-medium'>
                        Contribuir a la formación de jóvenes investigadores, precursores en el desarrollo de aplicaciones web, fomentando el uso de nuevas tecnologías informáticas.
                    </p>
                </div>
                <div className='taws-information-vision'>
                    <h1 className='taws-firacode-bold'>Misión</h1>
                    <p className='taws-firacode-medium'>
                        Ser profesionales líderes y promotores de proyectos Informáticos en la Web y sus aplicaciones de acuerdo a las necesidades que la comunidad requiera satisfacer en el plano educativo, comercial y laboral en general.
                    </p>
                </div>
                </div>
            </div>
            <div className='taws-about-img-container'>
                <img className='taws-about-img' src={require('../assets/about_us.png')} alt='' />
            </div>

        </div>
    )
}
export default About;