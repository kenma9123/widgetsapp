import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class FormListItem extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedForm: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {

    let listItemClass = classNames('list-item', 'form', {
      'selected': this.props.selectedForm && this.props.selectedForm.id === this.props.form.id
    });

    return (
      <li className={listItemClass} onClick={ (e) => this.props.onSelect(this.props.form.id) }>
        <i className="fa fa-circle"></i>
        <div className="form-title">
          {this.props.form.title}
        </div>
        <div className="form-updated">
          {this.props.form.updated_at}
        </div>
      </li>
    );
  }
}
