import React from 'react'
import {PRODUCTS} from '../../product'
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import CartItem from './CartItem';
import {useNavigate} from 'react-router-dom'
import './cart.css'

const Cart = () => {
  const navigate = useNavigate();
  const {addToCart, cartItem, getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const handleContinueShopping = ()=>{
    navigate('/')
  }
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItem[product.id]!==0){
            return <CartItem data= {product} />
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: $ {totalAmount} </p>
        <button onClick={handleContinueShopping}>Continue shopping</button>
        <button>Checkout</button>

      </div>
    </div>
  )
}

export default Cart
