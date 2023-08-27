import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Bother = () => {
    const[money] =useContext(MoneyContext)
    return (
        <div>
            <p>Brother</p>
            <p>{money} tk</p>
        </div>
    );
};

export default Bother;