import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '../context';
import { ComponentResolver } from './components';

const contentSlotRenderer = ({ slotId, components }) => {
    return (
        <div className={`content-slot ${slotId}`}>
            {
                components && components.map((component, index) =>
                    <div key={index}>
                        <ComponentResolver component={component} />
                    </div>
                )
            }
        </div>
    );
};

export const ContentSlot = ({ position }) => {
    return (
        <Fragment>
            <p>{position}</p>
            <PageContext.Consumer>
                {
                    page => {
                        const contentSlot = page.contentSlots.filter(
                            slot => slot.position === position
                        )[0];

                        return contentSlot && contentSlotRenderer(contentSlot);
                    }
                }
            </PageContext.Consumer>
        </Fragment>
    );
};

export default ContentSlot;

contentSlotRenderer.propTypes = {
    slotId: PropTypes.string,
    components: PropTypes.string
};

ContentSlot.propTypes = {
    position: PropTypes.string
};

