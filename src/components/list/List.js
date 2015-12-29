import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class List extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    scroll: PropTypes.bool,
    height: PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  render() {

    let { name } = this.props;
    let listClassName = classNames(name + '-list', 'list', {
      scroll: this.props.scroll
    });
    let listHeight = (this.props.scroll) ? {height: this.props.height} : {};

    return (
      <ul className={listClassName} style={listHeight}>
        { this.props.children }
      </ul>
    );
  }
}