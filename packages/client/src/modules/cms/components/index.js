import React from 'react';

import ProductCarouselComponent from './ProductCarouselComponent';
import SimpleResponsiveBannerComponent from './SimpleResponsiveBannerComponent';
import ProductAddToCartComponent from './ProductAddToCartComponent';

const ComponentResolver = ({ component }) => {
    const { typeCode } = component;

    switch (typeCode) {
    case 'SimpleResponsiveBannerComponent':
        return <SimpleResponsiveBannerComponent {...component} />;
    case 'ProductCarouselComponent':
        return <ProductCarouselComponent {...component} />;
    case 'ProductAddToCartComponent':
        return <ProductAddToCartComponent {...component} />;
    default:
        return <div>No component</div>;
    }
};

export {
    ComponentResolver,
    ProductCarouselComponent,
    SimpleResponsiveBannerComponent,
    ProductAddToCartComponent
};
