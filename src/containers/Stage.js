import React, { Component, PropTypes } from 'react';

export default class Stage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { picker } = this.props;
    return (
      <div className="division stage">
        Selected widget: { picker.widget.name } <br/>
        Selected Form: { picker.form.title }
      </div>
    );
  }
}
