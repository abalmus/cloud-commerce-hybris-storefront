import { wrapPubSub } from 'apollo-logger';
import { PubSub } from 'graphql-subscriptions';

import log from '../../../common/log';
import settings from '../../../../settings';

const pubsub = settings.app.logging.apolloLogging
    ? wrapPubSub(new PubSub(), { logger: log.debug.bind(log) })
    : new PubSub();

export default pubsub as PubSub;
