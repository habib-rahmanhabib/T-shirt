import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    const gray = useContext(RingContext)
    return (
        <div>
           <h4>auntey</h4> 
          
          <section className='flex'>
          <Cousin>Nabil</Cousin>
           <Cousin haste={true}>Nabila {gray}</Cousin>
          </section>
        </div>
    );
};

export default Aunty;