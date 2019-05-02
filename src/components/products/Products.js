import React from 'react';
import { useFetch } from '../../shared/hooks'
import './Products.scss';
import Price from '../../shared/price/Price';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import icoShipping from '../../assets/images/ic_shipping.png';

const Products = props => {
    const query = new URLSearchParams(props.location.search);
    const filter = query.get('search');
    const url = `http://localhost:8080/api/items?q=${filter}`;
    const [data, loading] = useFetch(url);

    return (
        <React.Fragment>
            <Breadcrumb categories={data.categories} />
            <div className="results-container">
            {loading ? (
                <p>loading...</p>
            ) : (
                <ul className="product_list">
                {data.items.map(item => {
                    const {id, picture, title, price, free_shipping, city} = item;
                    return (
                        <li key={id}>
                            <Link to={"/items/" + id}>
                                <div className="list_item">
                                    <div className="thumb-container">
                                        <img src={picture} alt="Product" />
                                    </div>
                                    <div className="details">
                                            <h2>{title}</h2>
                                            <div className="price-box">
                                                <Price price={price} />
                                                { free_shipping ? <img src={icoShipping} className="shipping" alt="Free Shipping" /> : null }
                                            </div>
                                    </div>
                                    <div className="city">{city}</div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
                </ul>
            )}
            </div>
        </React.Fragment>
    )       
}

export default Products;