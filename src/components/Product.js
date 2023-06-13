import { useShoppingCart} from "../context/ShoppingCartContext";

const Product = ({id,name,imgUrl,price})=>{
 const {
    increaseProductInCartQuantity,
    decreaseProductInCartQuantity,
    getProductCountInCart,
 }  = useShoppingCart();

    return (
        <div  key={id} className="product">
            <img src={`./images/${imgUrl}`}></img>
            <span className='title'>{name}</span>
            <span className='price'>{price}</span>
            {getProductCountInCart(id) > 0 ? 
             <div className='edit-product-count'>
                <button onClick={()=>decreaseProductInCartQuantity(id)}>-</button>
                <span className='product-count'>{getProductCountInCart(id)} in cart</span>
                <button onClick={()=>increaseProductInCartQuantity(id)}>+</button>
             </div>
             :<button onClick={()=>increaseProductInCartQuantity(id)}>Add to Cart</button>
            }
        </div>
    )
}

export default Product;