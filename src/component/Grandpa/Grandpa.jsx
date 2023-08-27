import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './grandpa.css'
import Uncle from '../Uncle/Uncle';
import Friends from '../Friends/Friends';

export const RingContext = createContext('gold')

export const MoneyContext = createContext([0])
const Grandpa = () => {

    const ring = 'Dimond'
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa '>

            
            <h1>grandpa</h1>

            <p><small>Money: {money}</small></p>

            <MoneyContext.Provider value={[money, setMoney]}>

                <RingContext.Provider value='goldeng ring'>

                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>

                </RingContext.Provider>

            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;