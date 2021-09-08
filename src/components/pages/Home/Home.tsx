import './HomeStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const products: Array<string> = ['Hats', 'Jackets', 'Mens', 'Sneakers', 'Womens'];

    return ( 
        <ul className="categories">
            {
            products.map((category: string) =>
            <li key={category}>
                <div className="category">
                    <Link to={'/category/' + category}>
                        <img className="category-image" src='https://caminhoslanguages.com/blog/wp-content/uploads/2020/11/roupas-estoque-500x265-1.jpg' alt="category" />
                        <div className="centered">{category}</div>
                        <div className="overlay"></div>
                    </Link>
                </div>
            </li>
            )
            }
        </ul>
    )
}

export default Home;
