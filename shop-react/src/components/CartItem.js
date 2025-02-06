import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <p>{item.name} - ${item.price}</p>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
