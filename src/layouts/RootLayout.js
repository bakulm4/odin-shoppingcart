import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs";
import {useShoppingCart}from "../context/ShoppingCartContext";
import ShoppingCart from "../components/ShoppingCart";
import {MdOutlineShoppingCart} from 'react-icons/md'

const RootLayout = () =>{

    const {cartItemCount,openCart, isCartOpen} = useShoppingCart();

    return (
            <div className='root-layout'>
                <header>
                    <nav>
                        <h1>Accentify</h1>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/store'>Store</NavLink>
                        <button onClick={openCart}>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375Zm13 0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375ZM1.135 2.212l2.962.543 18.762 2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 0 1-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476Zm3.798 2.175 1.503 7.844 12.996-.462 1.5-5.147-16-2.235Z"></path></svg> */}
                           <MdOutlineShoppingCart className='cart-icon'/> 
                         {cartItemCount > 0 && <span>{cartItemCount}</span>} 
                        </button>
                    </nav>
                </header>
                <main className={isCartOpen? 'margin-right':''}>
                    <Outlet/>
                </main>
                <ShoppingCart />
            </div>
    )
}

export default RootLayout;