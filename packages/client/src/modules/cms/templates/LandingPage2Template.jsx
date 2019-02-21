import React from 'react';
import PropTypes from 'prop-types';
import { ContentSlot } from '../ContentSlot';

const LandingPage2Template = ({ uid }) => {
    return (
        <div className={'page-template-container ' + uid}>
            <ContentSlot position="Section1" />

            <section>
                <ContentSlot position="Section2A" />
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


export default LandingPage2Template;

LandingPage2Template.propTypes = {
    uid: PropTypes.string
};
