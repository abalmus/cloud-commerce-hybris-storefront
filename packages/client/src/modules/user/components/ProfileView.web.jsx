import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import translate from '../../../i18n';
import { LayoutCenter } from '../../common/components';
import { Card, CardGroup, CardTitle, CardText, PageLayout } from '../../common/components/web';

import settings from '../../../../../../settings';

const renderMetaData = t => {
    return (
        <Helmet
            title={`${settings.app.name} - ${t('profile.title')}`}
            meta={[
                {
                    name: 'description',
                    content: `${settings.app.name} - ${t('profile.meta')}`
                }
            ]}
        />
    );
};

const ProfileView = ({ currentUserLoading, currentUser, t }) => {
    if (currentUserLoading && !currentUser) {
        return (
            <PageLayout>
                {renderMetaData(t)}
                <div className="text-center">{t('profile.loadMsg')}</div>
            </PageLayout>
        );
    } else if (currentUser) {
        return (
            <PageLayout>
                {renderMetaData(t)}
                <LayoutCenter>
                    <h1 className="text-center">{t('profile.card.title')}</h1>
                    <Card>
                        <CardGroup>
                            <CardTitle>{t('profile.card.group.name')}:</CardTitle>
                            <CardText>{currentUser.username}</CardText>
                        </CardGroup>
                        <CardGroup>
                            <CardTitle>{t('profile.card.group.email')}:</CardTitle>
                            <CardText>{currentUser.email}</CardText>
                        </CardGroup>
                        <CardGroup>
                            <CardTitle>{t('profile.card.group.role')}:</CardTitle>
                            <CardText>{currentUser.role}</CardText>
                        </CardGroup>
                        {currentUser.profile &&
              currentUser.profile.fullName && (
                            <CardGroup>
                                <CardTitle>{t('profile.card.group.full')}:</CardTitle>
                                <CardText>{currentUser.profile.fullName}</CardText>
                            </CardGroup>
                        )}
                        {/* Credit card info (Stripe subscription module)*/}
                        {settings.stripe.subscription.enabled &&
              settings.stripe.subscription.publicKey &&
              currentUser.role === 'user' && <p>payment method</p>}
                    </Card>
                    <Link
                        className="mt-2 btn user-link"
                        to={{ pathname: `/users/${currentUser.id}`, state: { from: 'profile' } }}
                    >
                        {t('profile.editProfileText')}
                    </Link>
                </LayoutCenter>
            </PageLayout>
        );
    } else {
        return (
            <PageLayout>
                {renderMetaData(t)}
                <h2>{t('profile.errorMsg')}</h2>
            </PageLayout>
        );
    }
};

ProfileView.propTypes = {
    currentUserLoading: PropTypes.bool,
    currentUser: PropTypes.object,
    t: PropTypes.func
};

export default translate('user')(ProfileView);
