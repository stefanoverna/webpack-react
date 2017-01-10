import React from 'react';
import deepEqual from 'deep-equal';
import { intlShape } from 'react-intl';

export default class BaseComponent extends React.Component {
  static contextTypes = {
    intl: intlShape,
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    let shouldUpdate = !deepEqual(nextProps, this.props) ||
                       !deepEqual(nextState, this.state);

    /* Entry point non ha il context intl */
    if (nextContext.intl !== undefined) {
      shouldUpdate = shouldUpdate ||
                     this.context.intl.locale !== nextContext.intl.locale;
    }

    return shouldUpdate;
  }

  t(id, values = {}) {
    const { intl } = this.context;
    return intl.formatMessage({ id }, values);
  }
}

