import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProductCarouselComponent = ({productCodes, title}) => {
    return (
        <Fragment>
            <h1>{title}</h1>
            <h4>{productCodes}</h4>
        </Fragment>
    );
};

export default ProductCarouselComponent;


ProductCarouselComponent.propTypes = {
    productCodes: PropTypes.string,
    title: PropTypes.string
};