import React from 'react';
import PropTypes from 'prop-types';
import './Price.scss';

const Price = props => {
    const {currency, amount, decimals} = props.price;
    return (
        <div className="price">
            <span className="currency">{currency === 'ARS' ? '$' : ''}</span>
            <span className="amount">{amount.toLocaleString('es')}</span>
            <span className="decimal">{decimals > 0 ? decimals : ''}</span>
        </div>
    )
}

Price.propTypes = {
    price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    })
};

export default Price;