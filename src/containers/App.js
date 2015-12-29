import React, { Component, PropTypes } from 'react';
import Pickers from '../containers/Pickers';
import Stage from '../containers/Stage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
        <div className="division navigation"></div>
        <Pickers { ...this.props }/>
        <Stage { ...this.props }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    widgets: state.widgets,
    forms: state.forms,
    picker: state.picker
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
