import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,  handlerAddToCart}) => {
    const {picture, name, price, gender} =  tshirt
    return (
        <div className='tshirt-component'>
            <img src={picture} alt="" />
            <h5>Name: {name}</h5>
            <p>Price: {price}</p>
            <button onClick={()=> handlerAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;