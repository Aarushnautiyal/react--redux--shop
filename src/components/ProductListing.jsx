import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log(err);
        })
        // console.log(res.data);
        dispatch(setProducts(res.data))
    }
    console.log(products);
    useEffect(()=>{fetchProducts()})

    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
