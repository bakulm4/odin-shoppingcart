// import { forwardRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext"
import productList from '../data/items.json';
import { IoClose } from "react-icons/io5";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import { Link } from "react-router-dom";

const ShoppingCart = ()=>{
const {isCartOpen,closeCart,cartItems,cartItemCount,increaseProductInCartQuantity,
    decreaseProductInCartQuantity,
    removeProductFromCart,} = useShoppingCart();

     return (
        <div className={isCartOpen? 'shopping-cart open':'shopping-cart'}>
         <div className='shopping-cart-header'>
            <h4>Your Cart</h4>
            <button className="closebtn" onClick={closeCart}><IoClose/></button>
         </div>
         <div className='shopping-cart-body'>
         {cartItemCount === 0 ?
            <div className="empty-bag">
                <HiOutlineShoppingBag className='shopping-bag'/>
                <h3 className='center-text'>You have no items in your cart</h3>
                <Link className='btn' to='/store' onClick={closeCart}>Continue Shopping</Link>
            </div>
            
            :
            <>
                <div className="cart-item-list">
                {
                    cartItems.map(item =>{
                        const product = productList.find(product=> product.id===item.id);
                        return(
                                <div key={item.id} className='cart-item'>
                                    <img src={`./images/${product.imgUrl}`}></img>
                                    <span className='title'>{product.name}</span>
                                    <div className='edit-count'>
                                        <button onClick={()=>decreaseProductInCartQuantity(item.id)}>-</button>
                                        <span className='quantity'>{item.count}</span>
                                        <button onClick={()=>increaseProductInCartQuantity(item.id)}>+</button>
                                    </div>
                                    <span className='price'>{product.price*item.count}</span>
                                    <IoClose className='remove-item' onClick={()=>removeProductFromCart(item.id)}/>
                                </div>
                            )
                    })}
                </div>
                <div className='cart-total'>
                    <p>Subtotal</p>
                    <p>{cartItems.reduce((total,item)=>
                            total+item.count*productList.find(product=> product.id===item.id).price,0)}</p>
                </div>
                <div className="shopping-cart-footer">
                    <Link onClick={closeCart} to='/store'><FaArrowLeft/> Back to Shop</Link>
                    <Link to='#'> Proceed To checkout <FaArrowRight/></Link>
                </div>
               
            </>
          }
         </div>
        </div>
        )
}

export default ShoppingCart