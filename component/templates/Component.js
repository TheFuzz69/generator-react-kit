import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './<%= componentName %>.scss';

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
    return (
      <div/>
    );
  }
}

export default withStyles(<%= componentName %>, s);