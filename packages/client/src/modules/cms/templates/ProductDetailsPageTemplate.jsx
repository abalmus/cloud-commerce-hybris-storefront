import React from 'react';
import PropTypes from 'prop-types';
import { ContentSlot } from '../ContentSlot';
import { ProductContext } from '../../context';

const ProductDetailsPageTemplate = ({ uid }) => {
    return (
        <div className={'product-page-template-container ' + uid}>
            <ContentSlot position="Section1" />

            <ProductContext.Consumer>
                {
                    product => (
                        <p>{product.name} | { product.price.formattedValue }</p>
                    )
                }
            </ProductContext.Consumer>

            <section>
                <ContentSlot position="AddToCart" />
                <ContentSlot position="Section2B" />
            </section>

            <ContentSlot position="Section2C" />
            <hr />

            <ContentSlot position="Section3" />
            <ContentSlot position="Section4" />
            <ContentSlot position="Section5" />
        </div>
    );
};

export default ProductDetailsPageTemplate;

ProductDetailsPageTemplate.propTypes = {
    uid: PropTypes.string
};