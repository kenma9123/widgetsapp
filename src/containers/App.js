import React, { Component, PropTypes } from 'react';
import Pickers from '../containers/Pickers';
import Stage from '../containers/Stage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
        <div className="division navigation"></div>
        <Pickers { ...this.props }/>
        <Stage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    widgets: state.widgets,
    forms: state.forms
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
