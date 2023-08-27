import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({children, haste}) => {
    return (
        <div>
            <h5>Cousin</h5>
            <p><small>{children}</small></p>
            {haste && <Friends></Friends>}
        </div>
    );
};

export default Cousin;