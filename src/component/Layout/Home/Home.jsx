import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt/Tshirt';
import Cart from '../../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';




const Home = () => {

    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])

    const handlerAddToCart = tshirt => {

        const exist = cart.find(ts => ts._id === tshirt._id)

        if (exist) {
            toast('you have already one')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handlerRemoveToCart = id => {
        console.log(id)
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            {/* tshirt component */}
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handlerAddToCart={handlerAddToCart}
                    ></Tshirt>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handlerRemoveToCart={handlerRemoveToCart}
                ></Cart>
            </div>
           
        </div>
    );
};

export default Home;