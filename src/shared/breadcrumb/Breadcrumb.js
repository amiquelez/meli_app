import React from 'react';
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

export default Breadcrumb;