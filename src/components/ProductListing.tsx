import { 
    useState,
    useEffect 
} from 'react';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import { 
    removeProducts, 
    setProducts 
} from '../redux/actions/productActions';
import { fakeStoreGet } from '../utils/fakeStoreAPI';
import Loader from './Loader';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts);
    const dispatch = useDispatch();

    const [API_Status, setAPI_Status] = useState('loading');

    useEffect(() => {
        fakeStoreGet('products', dispatch, setProducts).then((isSuccessful: boolean) => {
            setAPI_Status(isSuccessful ? 'successful' : 'failed');
        });
        return () => {
            dispatch(removeProducts());
        }
    }, []);

    return (
        <div className='ui stackable grid container page-padding-bottom'>
            {
                API_Status === 'loading'
                ?
                    <Loader />
                :
                API_Status === 'successful'
                ?
                    products.map((product: any, index: number) => {
                        return (
                            <ProductComponent product={product} key={index} />
                        )
                    })
                :
                (
                    <h2>Bad API call</h2>
                )
            }
        </div>
    );
}
 
export default ProductListing;