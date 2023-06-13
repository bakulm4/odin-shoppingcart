import { useState, useContext, createContext, useEffect } from "react";
import { useImmer } from "use-immer";

const ShoppingCartContext = createContext(null);

export const useShoppingCart = ()=> useContext(ShoppingCartContext);

const ShoppingCartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useImmer(()=>{
        const data = localStorage.getItem('cartItems');

        if(data)
            return JSON.parse(data);
        return [];
    });

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },[cartItems]);

    const openCart = ()=>setIsCartOpen(true);
    const closeCart = ()=>setIsCartOpen(false);

    const increaseProductInCartQuantity = id => {
        if(!cartItems.some(item=>item.id === id))
            setCartItems(draft=>{
                draft.push({id:id,count:1});
            });
        else
            setCartItems(draft=>{
                const product= draft.find(item=>item.id=== id);
                product.count +=1;
            });
        };
    
    const decreaseProductInCartQuantity = id => {
        if(cartItems.find(item=>item.id === id)?.count===1)
            setCartItems(draft=>{
                draft.splice(draft.findIndex(item=>item.id === id),1);
            });
        else
            setCartItems(draft=>{
                const product= draft.find(item=>item.id=== id);
                product.count -=1;
            });
        };

    const removeProductFromCart = id => {
        setCartItems(draft=>{
            draft.splice(draft.findIndex(item=>item.id === id),1);
        });
        };

    const getProductCountInCart = id =>{
        const product = cartItems.find(item=>item.id===id);

        return product? product.count:0
    }

    const cartItemCount = cartItems.reduce((total,item)=> total+item.count,0);

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            increaseProductInCartQuantity,
            decreaseProductInCartQuantity,
            removeProductFromCart,
            cartItemCount,
            openCart,
            closeCart,
            isCartOpen,
            getProductCountInCart 
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;