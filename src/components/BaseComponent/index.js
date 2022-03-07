import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';


class BaseComponent extends React.Component {
  notice = config.notice; 
  get history() {
    return this.context.router.history;
  }
}

BaseComponent.contextTypes = {
  router: PropTypes.object
};

export default BaseComponent;
