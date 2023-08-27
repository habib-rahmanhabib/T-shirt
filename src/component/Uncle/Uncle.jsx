import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
   const [money, setMoney] = useContext(MoneyContext)

    return (
        <div>
            <h4>Uncle</h4>
          <p><small>Money:{money}</small></p>
          <button onClick={()=>setMoney(money+1000)}>Add money</button>
            <section className='flex'>
                <Cousin>Kabila</Cousin>
                <Cousin haste={true}>Kabili</Cousin>
            </section>
        </div>
    );
};

export default Uncle;