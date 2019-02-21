import React from 'react';
import PropTypes from 'prop-types';

const SimpleResponsiveBannerComponent = ({ media }) => {
    const { desktop } = media;

    return (
        <div>
            <img src={'https://localhost:9002' + desktop.url} alt={desktop.altText} />
        </div>
    );
};

export default SimpleResponsiveBannerComponent;

SimpleResponsiveBannerComponent.propTypes = {
    media: PropTypes.any
};
