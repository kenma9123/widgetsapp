import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import WidgetList from '../../src/components/WidgetList';
import * as reducerData from '../../src/constants/ReducerData';
import fs from 'fs';
chai.use(sinonChai);

let expect = chai.expect;
let props = {
  widgets: {
    selectedWidget: {},
    widgetList: reducerData.WIDGET_LIST
  },
  actions: {
    toggleWidget: sinon.spy()
  }
};

describe('components', () => {
  describe('Widget List', () => {
    let component = {};
    beforeEach(() => {
      let componentInDoc = TestUtils.renderIntoDocument(
        <WidgetList widgets={props.widgets} actions={props.actions}/>
      );
      component = ReactDOM.findDOMNode(componentInDoc);
    });

    it('should render successfully', () => {
      expect(component).to.exist;
    });

    it('should render widget list container', () => {
      expect(component.className).to.contain('widget-list');
    })

    it('should have 5 widgets rendered', () => {
      let ulChild = component.children[0];
      expect(ulChild.children.length).to.be.equal(5);
    })

    it('should click the first widget on the list and callback', () => {
      let ulChild = component.children[0];
      let liChild = ulChild.children[0];
      expect(liChild.className).to.contain('list-item');
      TestUtils.Simulate.click(liChild);
      expect(props.actions.toggleWidget).to.have.been.calledWith();
    });
  })
})
