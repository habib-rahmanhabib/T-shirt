import React from 'react';
import './cart.css'

const Cart = ({cart, handlerRemoveToCart}) => {

    let message;
    if(cart.length === 0 ){
        message=<p> please added some product</p>
    }
   
    return (
        <div className='summary-component'>
           <h3 className={`bold yellow ${cart.length === 1 ?" purple" :" green" } `}>Order Summary: {cart.length}</h3> 
           {message}
           <h3 className={cart.length> 3? 'blue' : 'red'} > {cart.length > 3 ?  'Boroloxxxx' : 'pokira' }</h3>
           {
            cart.map(card => <p
            key={card._id}
            >
                {card.name} 
           <button onClick={ ()=> handlerRemoveToCart(card._id) }>X</button>
                
                </p>  )
                
           }
        </div>
    );
};

export default Cart;