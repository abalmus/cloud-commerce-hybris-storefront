import React from 'react';
import { ProductContext } from '../../context';

const ProductAddToCartComponent = () => {
    return (
        <p>
            <ProductContext.Consumer>
                {
                    product => (
                        <button>Add to cart {product.price.formattedValue}</button>
                    )
                }
            </ProductContext.Consumer>
        </p>
    );
};

export default ProductAddToCartComponent;
