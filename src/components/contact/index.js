import React from 'react';
import './index.scss';

const contactObj = [
    {
        label: 'taws@espol.edu.ec',
        link: 'mailto:',
        iconPaht: require('../assets/email.png')

    },
    {
        label: '@tawsespol',
        link: 'https://twitter.com/tawsespol',
        iconPaht: require('../assets/twitter.png')
    },
    {
        label: '@TawsEspol',
        link: 'github.com/TawsEspol',
        iconPaht: require('../assets/github_contact.png')
    },
    {
        label: '@tawsespol',
        link: 'https://www.instagram.com/tawsespol/',
        iconPaht: require('../assets/instagram.png')
    }
];
const Contact = () => {

    return (
        <div className='taws-contact-general'>
            {
                contactObj.map((item, index) => {
                    const { label, link, iconPaht } = item;
                    return (
                        <div className='taws-contact' key={index}>
                            <div className='taws-contact-icon'>
                                <img src={iconPaht} alt='' />
                            </div>
                            <div className='taws-contact-label taws-firacode-bold'>{label}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Contact;