import React from 'react';
import PropTypes from 'prop-types';
import './Price.scss';

const Price = props => {
    const {currency, amount, decimals} = props.price;
    let formatDecimals = decimals;
    if(decimals < 10){
        formatDecimals = (decimals === 0) ? '' : '0' + decimals;
    }
    return (
        <div className="price">
            <span className="currency">{currency === 'ARS' ? '$' : ''}</span>
            <span className="amount">{amount.toLocaleString('es')}</span>
            <span className="decimals">{formatDecimals}</span>
        </div>
    )
}

Price.propTypes = {
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired
    })
};

export default Price;