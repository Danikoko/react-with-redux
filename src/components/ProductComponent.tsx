import { Link } from "react-router-dom";

const ProductComponent = ({product}: any) => {
    const { id, title, image, price, category } = product;
    return (
        <div className='four wide column'>
            <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={image} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default ProductComponent;