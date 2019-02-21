import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import TemplatesProvider from '../../cms/TemplatesProvider';

import PAGE_QUERY from '../../page/graphql/PageQuery.graphql';
import PRODUCT_QUERY from '../graphql/ProductQuery.graphql';
import { PageContext, ProductContext } from '../../context';

const ProductPage = ({loading, page, product}) => {
    return (
        <div>
            {
                (!loading && page && product) ? (
                    <PageContext.Provider value={page}>
                        <ProductContext.Provider value={product}>
                            <TemplatesProvider template={page.template} />
                        </ProductContext.Provider>
                    </PageContext.Provider>
                ) : <p>Loading...</p>
            }
        </div>
    );
};

export default compose(
    graphql(PAGE_QUERY, {
        options({ match }) {
            return {
                variables: { pageType: 'ProductPage', code: match.params.code },
                fetchPolicy: 'cache-and-network'
            };
        },

        props({ data }) {
            const { loading, error, page, subscribeToMore } = data;

            if (error) throw new Error(error);
            return { loading, page, subscribeToMore };
        }
    }),

    graphql(PRODUCT_QUERY, {
        options({ match }) {
            return {
                variables: { code: match.params.code },
                fetchPolicy: 'cache-and-network'
            };
        },

        props({ data }) {
            const { loading, error, product, subscribeToMore } = data;

            if (error) throw new Error(error);
            return { loading, product, subscribeToMore };
        }
    })
)(ProductPage);

ProductPage.propTypes = {
    loading: PropTypes.bool,
    page: PropTypes.any,
    product: PropTypes.any
};