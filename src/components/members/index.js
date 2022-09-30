import React from 'react';
import './index.scss';
import CardMember from './CardMember';

const Members = () => {
    return (
        <div className='taws-member'>
            <div className='taws-member-title'>
                <span className='taws-title-directive taws-firacode-bold'>
                    Directiva
                </span>
            </div>
            <div className='taws-directive'>
                <div>
                    <CardMember
                        name='Joangie Marquéz'
                        image={require("../assets/jojo.png")}
                        title='Vicepresidente académico' />
                </div>
                <div>
                    <CardMember
                        name='Daniela Landeta'
                        image={require("../assets/daniela.png")}
                        title='Presidente' />
                </div>
                <div>
                    <CardMember
                        name='Joseph Ávila'
                        image={require("../assets/joseph.png")}
                        title='Vicepresidente administrativo' />
                </div>
            </div>
        </div>
    );
};
export default Members;