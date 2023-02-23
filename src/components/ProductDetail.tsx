import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { fakeStoreGet } from "../utils/fakeStoreAPI";
import Loader from "./Loader";

const ProductDetail = () => {

    const params = useParams();
    const dispatch = useDispatch();

    const [API_Status, setAPI_Status] = useState('loading');

    const { productId } = params;
    const product = useSelector((state: any) => state.product);
    const {
        image,
        title,
        price,
        category,
        description
    } = product;

    useEffect(() => {
        fakeStoreGet(`products/${productId}`, dispatch, selectedProduct).then((isSuccessful: boolean) => {
            setAPI_Status(isSuccessful ? 'successful' : 'failed');
        });
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, []);

    return (
        <div className="page-padding-bottom">
            {
                API_Status === 'loading'
                ?
                    <Loader />
                :
                API_Status === 'successful'
                ?
                    // <>
                    //     <h1>Product Detail</h1>
                    //     <br />
                    //     <p>{product && product.title}</p>
                    // </>
                    <div className="ui grid container">
                        <div className="ui placeholder segment">
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">AND</div>
                                <div className="middle aligned row">
                                    <div className="column lp">
                                        <img src={image} alt={image} className="ui fluid image" />
                                    </div>
                                    <div className="column rp">
                                        <h1>{title}</h1>
                                        <h2>
                                            <a className="ui teal tag label">${price}</a>
                                        </h2>
                                        <h3 className="ui brown block header">{category}</h3>
                                        <p>{description}</p>
                                        <div className="ui vertical animated button" tabIndex={0}>
                                            <div className="hidden content">
                                                <i className="shop icon"></i>
                                            </div>
                                            <div className="visible content">Add to Cart</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                (
                    <h2>Bad API call</h2>
                )
            }
        </div>
    );
}
 
export default ProductDetail;