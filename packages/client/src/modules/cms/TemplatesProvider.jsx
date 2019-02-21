import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const Header = () => (<div></div>);
const Footer = () => (<div>Footer</div>);

const TemplatesProvider = ({ template }) => {
    const Body = loadable(() => import(`./templates/${template}`));

    return (
        <Fragment>
            <Header />
            <Body />
            <Footer />
        </Fragment>
    );
};

export default TemplatesProvider;

TemplatesProvider.propTypes = {
    template: PropTypes.string
};
