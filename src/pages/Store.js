import productList from '../data/items.json';
import Product from '../components/Product';
const Store = () =>{
    console.log(`ProductList: `, productList);
    return (
        <div className='store'>
            {/* {productList.map(product=> <img key={product.id} src={`./images/${product.imgUrl}`}></img>)} */}
            {productList.map(product=> <Product key={product.id} {...product}/>)}
        </div>
    )
}

export default Store;