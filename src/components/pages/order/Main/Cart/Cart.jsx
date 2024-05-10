import React, { useContext, useEffect, useState } from 'react';
import  OrderContext  from '../../../../../context/OrderContext';

const Cart = () => {
    const { Cart } = useContext(OrderContext);

    return (
        <div>
            {Cart && Cart.map((product) => (
               <div key={product.id}>
               <h3>{product.name}</h3>
               <p>{product.price}</p>
           </div>
            ))}
        </div>
    );
}

export default Cart;