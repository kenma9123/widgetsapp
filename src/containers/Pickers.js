import React, { Component, PropTypes } from 'react';
import WidgetList from '../components/WidgetList';
import FormList from '../components/FormList';
import { isEmpty } from 'lodash/lang';

export default class Pickers extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    widgets: PropTypes.object.isRequired,
    forms: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  getSelectedForm() {
    let { forms } = this.props;
    return (!isEmpty(forms.selectedForm)) ? forms.selectedForm.title : '';
  }

  getSelectedWidget() {
    let { widgets } = this.props;
    return (!isEmpty(widgets.selectedWidget)) ? widgets.selectedWidget.name : '';
  }

  render() {
    const { user, widgets, forms, actions } = this.props;

    return (
      <div className="division data-list">
        <div>
          <div className="section-title">
            Widget List
            <span className="icon-container">
              <i className="fa fa-th-list"></i>
            </span>
          </div>
          <WidgetList widgets={widgets} actions={actions} />
        </div>
        <div>
          <div className="section-title">
            Form List
            <span className="icon-container">
              <i className="fa fa-th-list"></i>
            </span>
          </div>
          <FormList user={user} forms={forms} actions={actions}/>
        </div>
      </div>
    );
  }
}
