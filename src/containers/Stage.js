import React, { Component, PropTypes } from 'react';

export default class Stage extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    widgets: PropTypes.object.isRequired,
    forms: PropTypes.object.isRequired,
    picker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { user, widgets, forms, picker } = this.props;
    return (
      <div className="division stage">
        Current user: { user.details.name } <br/>
        Widget Count: { widgets.widgetList.length } <br/>
        Form Count: { forms.formList.length } <br/>
        <br/>
        Selected widget: { picker.widget.name } <br/>
        Selected Form: { picker.form.title } <br/>
      </div>
    );
  }
}
