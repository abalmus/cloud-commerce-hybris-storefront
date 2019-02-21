import React from 'react';
import PropTypes from 'prop-types';
import { hybris as hybrisConfig } from '../../../../../../config';

const SimpleResponsiveBannerComponent = ({ media }) => {
    const { desktop } = media;

    return (
        <div>
            <img src={hybrisConfig.base + desktop.url} alt={desktop.altText} />
        </div>
    );
};

export default SimpleResponsiveBannerComponent;

SimpleResponsiveBannerComponent.propTypes = {
    media: PropTypes.any
};
