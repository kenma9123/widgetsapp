import { expect } from 'chai';
import widgets from '../../src/reducers/widgets';
import * as types from '../../src/constants/ActionTypes';

let widgetList = require('../../config/widgets.json');

describe('widgets reducer', () => {
  it('should be an object on initial state', () => {
    expect(widgets(undefined, {})).to.be.an('object');
  })

  it('should not empty widget list on initial state', () => {
    expect(widgets(undefined, {})).to.have.property('widgetList').that.is.not.empty
  })

  it('should match the data from the widgets.json', () => {
    expect(widgets(undefined, {})).to.have.property('widgetList').that.is.equal(widgetList)
  })
})
