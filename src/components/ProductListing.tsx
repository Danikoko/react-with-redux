import axios from 'axios';
import { useEffect } from 'react';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { API_URL } from '../utils/constants';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response: any = await axios.get(
            `${API_URL}products`
        ).catch(error => {
            console.log('Error', error)
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='ui grid container'>
            {
                products.map((product: any, index: number) => {
                    return (
                        <ProductComponent product={product} key={index} />
                    )
                })
            }
        </div>
    );
}
 
export default ProductListing;