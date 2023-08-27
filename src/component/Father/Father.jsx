import React from 'react';
import Myself from '../myself/Myself';
import Bother from '../Bother/Bother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h4>father</h4>
           
           <section className='flex'>
           <Myself ring= {ring}></Myself>
            <Bother></Bother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Father;