import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import FormList from '../../src/components/FormList';
import fs from 'fs';
chai.use(sinonChai);

let expect = chai.expect;
let formsList = JSON.parse(fs.readFileSync('./test/mock/forms.json', 'utf-8'));
let props = {
  user: {
    isLoggedIn: true,
    details: {},
    apikey: '4cf8b41e95cd56c492594bb245ac2ffb'
  },
  forms: {
    isFetching: false,
    selectedForm: {},
    formList: formsList.content
  },
  actions: {
    toggleForm: sinon.spy(),
    fetchForms: sinon.spy()
  },
};

describe('components', () => {
  describe('Form List', () => {
    let component = {};
    beforeEach(() => {
      let componentInDoc = TestUtils.renderIntoDocument(
        <FormList user={props.user} forms={props.forms} actions={props.actions} onSelect={props.onSelect}/>
      );
      component = ReactDOM.findDOMNode(componentInDoc);
    });

    it('should render successfully', () => {
      expect(component).to.exist;
    });

    it('shoud call fetchForms when component mounted', () => {
      expect(props.actions.fetchForms).to.have.been.calledWith();
    })

    it('should render form list container', () => {
      expect(component.className).to.contain('form-list')
    })

    it('should have at least more than 10 form list rendered', () => {
      let ulChild = component.children[0];
      expect(ulChild.children.length).to.be.above(10);
    })

    it('should click the first form on the list and callbacks', () => {
      let ulChild = component.children[0];
      let liChild = ulChild.children[0];
      expect(liChild.className).to.contain('list-item');
      TestUtils.Simulate.click(liChild);
      expect(props.actions.toggleForm).to.have.been.calledWith();
    });
  })
})
