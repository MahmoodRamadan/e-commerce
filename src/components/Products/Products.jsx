import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './Products.module.css'
const Products = () => {

    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('');

    let getProducts = async()=> {
        let {data}= await axios.get("https://fakestoreapi.com/products");
        setProducts(data)
    }
    useEffect(()=>{
        getProducts()
        },[])
  return (
    <div className={styles.products}>
        <h2>All Products</h2>
        <h3 className='mb-4'>search by product name:</h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        <div className='d-flex flex-wrap my-5'>

            {products.filter((product)=> {
                if(search ==="") {
                  return product;
                }else if (product.title.tLowerCase.includes(search.toLowerCase())){
                 
                }
            }).map( (product,index)=>
        <div className='col-lg-4 mt-5'>
        <div key={index} className='product card'>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className='card-body'>
            <h3 className='card-title'>{product.title}</h3>
            <p>{product.price} $</p>
            </div>
        </div>
        </div>
          ) }
          
          </div>

    </div>
  )
}

export default Products