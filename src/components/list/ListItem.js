import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ListItem extends Component {

  static propTypes = {
    itemdata: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {

    let { itemdata, selected, onSelect } = this.props;
    let listItemClass = classNames('list-item', {
      'selected': selected
    });

    return (
      <li className={listItemClass} onClick={ (e) => onSelect(itemdata) }>
        { this.props.children }
      </li>
    );
  }
}
