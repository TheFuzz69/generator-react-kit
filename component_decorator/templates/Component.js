import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './<%= componentName %>.scss';

@withStyles(styles)
class <%= componentName %> extends Component {
  static propTypes = {
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    setHeaderPageTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
  };

  constructor() {
    super();
    this.state = { };
  }

  render() {
    this.context.onSetTitle('<%= componentName %>');
    return (
    <div/>
    );
  }
}

export default <%= componentName %>;