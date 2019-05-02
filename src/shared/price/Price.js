import React from 'react';
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

export default Price;