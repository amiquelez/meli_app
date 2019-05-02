import React from 'react';
import Price from '../../shared/price/Price';
import './Product.scss';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import { useFetch } from '../../shared/hooks'

const Product = props => {
    const id = props.match.params.id;
    const url = `http://localhost:8080/api/items/${id}`;
    const [data, loading] = useFetch(url);
    const {title, condition, sold_quantity, description, picture, price} = data;
    console.log(data);

    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="product-view">
            {loading ? (
                <p>loading...</p>
            ) : (
                <React.Fragment>
                    <div className="content-view">
                        <div className="image-content">
                            <img src={picture} alt={title} />
                        </div>
                        <h3>Descripción del producto</h3>
                        <div className="description">{description}</div>
                    </div>
                    <div className="sidebar">
                        <div className="condition"><span>{condition}</span> - {sold_quantity} vendidos</div>
                        <h2>{title}</h2>
                        <Price price={price} />
                        <button className="btn_shop">Comprar</button>
                    </div>
                </React.Fragment>
            )}
            </div>
        </React.Fragment>
    )
}

export default Product;