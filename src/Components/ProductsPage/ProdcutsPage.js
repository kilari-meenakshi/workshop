

/*import React from 'react';
import './ProductsPage.css';
import Product from '../Product/Product';

const ProductsPage = () => {
    
    const products = [
        { id: 1, name: " i phone16", price: 70000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC-7tZFz8mPgTjYkBhqF949q5XhrtJGaXL3GBpnKJoSCZ-MOoPan8zxmU4siHggzUsJ83_xImiqFwdZqjwa33ioV5PiNZ-9R-IkgsFrr1hJvAi-bpcvKa9Ke_5sxAs8MMafMFc7Qk&usqp=CAc" },
        { id: 2, name: " Kids Wear", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy6u8fr4JNUdzipooNgusCc6jtkuNZdEO4A&s" },
        { id: 3, name: "ADLKP Novel", price: 600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPkZiAEOXilrMWw099uTl_BYp9QZ2iu4KnA&s" },
        { id: 4, name: "Logn Frock", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypgJfC-7ZSrTUjqxPg3nnwy-OZZ6l8Zb4w&s" },
        { id: 5, name: "Logn Frock", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypgJfC-7ZSrTUjqxPg3nnwy-OZZ6l8Zb4w&s" }
    ];

   
    return (
        <div className='ProductMainContainer'>
           
            <div className='ProductsGrid'>
                {products.map((e) => (
                    <div className='ProductContainer' key={e.id}>
                        <Product data={e} name={e.name}  image={e.image} price={e.price} />
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;*/




// src/Components/ProductsPage/ProductsPage.js
/*import React from 'react';
import Product from '../Product/Product'; // Ensure this path is correct
import './ProductsPage.css';

const ProductsPage = () => {
    const products = [
        { id: 1, name: " i phone16", price: 70000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC-7tZFz8mPgTjYkBhqF949q5XhrtJGaXL3GBpnKJoSCZ-MOoPan8zxmU4siHggzUsJ83_xImiqFwdZqjwa33ioV5PiNZ-9R-IkgsFrr1hJvAi-bpcvKa9Ke_5sxAs8MMafMFc7Qk&usqp=CAc" },
        { id: 2, name: " Kids Wear", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy6u8fr4JNUdzipooNgusCc6jtkuNZdEO4A&s" },
        { id: 3, name: "ADLKP Novel", price: 600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPkZiAEOXilrMWw099uTl_BYp9QZ2iu4KnA&s" },
        { id: 4, name: "Logn Frock", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypgJfC-7ZSrTUjqxPg3nnwy-OZZ6l8Zb4w&s" }
    ];

    return (
        <div className='ProductMainContainer'>
            <div className='ProductsGrid'>
                {products.map((e) => (
                    <div className='ProductContainer' key={e.id}>
                        <Product data={e} name={e.name} image={e.image} price={e.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;*/

// ProductsPage.js
import React from 'react';
import Product from '../Product/Product'; 
import './ProductsPage.css';

const ProductsPage = () => {
    const products = [
        { id: 1, name: "iPhone 16", price: 70000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC-7tZFz8mPgTjYkBhqF949q5XhrtJGaXL3GBpnKJoSCZ-MOoPan8zxmU4siHggzUsJ83_xImiqFwdZqjwa33ioV5PiNZ-9R-IkgsFrr1hJvAi-bpcvKa9Ke_5sxAs8MMafMFc7Qk&usqp=CAc" },
        { id: 2, name: "Kids Wear", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy6u8fr4JNUdzipooNgusCc6jtkuNZdEO4A&s" },
        { id: 3, name: "ADLKP Novel", price: 600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPkZiAEOXilrMWw099uTl_BYp9QZ2iu4KnA&s" },
        { id: 4, name: "Long Frock", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypgJfC-7ZSrTUjqxPg3nnwy-OZZ6l8Zb4w&s" }
    ];

    return (
        <div className='ProductMainContainer'>
            <div className='ProductsGrid'>
                {products.map((product) => (
                    <div className='ProductContainer' key={product.id}>
                        <Product name={product.name} image={product.image} price={product.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;

