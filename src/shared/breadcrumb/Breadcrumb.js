import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.scss';

const Breadcrumb = props => {
    return (
        <ul className="category_path">
            {props.categories ? props.categories.map((cat, index) => {
                return <li key={index}>{cat}</li>
            }) : null }
        </ul>
    )
}

Breadcrumb.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string)
};

export default Breadcrumb;