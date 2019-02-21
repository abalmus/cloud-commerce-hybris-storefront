import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import TemplatesProvider from '../../cms/TemplatesProvider';
import PAGE_QUERY from '../graphql/PageQuery.graphql';
import { PageContext } from '../../context';

const Page = ({loading, page}) => {
    return (
        <div>
            {
                (!loading && page) ? (
                    <PageContext.Provider value={page}>
                        <TemplatesProvider template={page.template} />
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
                variables: { pageLabelOrId: match.params.pageLabelOrId || 'homepage' },
                fetchPolicy: 'cache-and-network'
            };
        },

        props({ data }) {
            const { loading, error, page } = data;
            if (error) throw new Error(error);
            return { loading, page };
        }
    })
)(Page);

Page.propTypes = {
    loading: PropTypes.bool,
    page: PropTypes.any
};
