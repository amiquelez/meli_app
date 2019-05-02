import React from 'react';
import './Header.scss';
import meliLogo from '../../assets/images/logo.png';
import { useForm } from '../../shared/hooks';
import { Link } from 'react-router-dom';

const Header = props => {

    const { values, handleChange, handleSubmit } = useForm(redirect);

    function redirect(){
        props.history.push({
            pathname: '/items',
            search: '?search=' + values
        });
    }

    return (
        <header>
            <div className="container">
                <Link to="/"><h1><img src={meliLogo} alt="Mercadolibre" /></h1></Link>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="searchBar" placeholder="Nunca dejes de buscar" onChange={handleChange} />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </header>
    )
}

export default Header;