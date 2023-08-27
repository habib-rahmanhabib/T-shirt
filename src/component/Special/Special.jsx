import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const gold =  useContext(RingContext)
    return (
        <div>
            <h6>Special</h6>
            <p>{gold}</p>
        </div>
    );
};

export default Special;