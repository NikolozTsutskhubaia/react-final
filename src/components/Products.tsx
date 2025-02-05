import { FC, useState, useEffect } from 'react';
import { Product } from '../types';

export const Products: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <div className="products-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p className="price">${product.price}</p>
                </div>
            ))}
        </div>
    );
};