import { expect } from 'chai';
import forms from '../../src/reducers/forms';
import * as types from '../../src/constants/ActionTypes';

let formsList = JSON.parse(require('fs').readFileSync('./test/mock/forms.json', 'utf-8'));

let formRequest = forms(undefined, {
  type: types.FORMS_SUCCESS,
  response: formsList.content
});

describe('forms reducer', () => {
  it('initial state should be an object', () => {
    expect(forms(undefined, {})).to.be.an('object');
  })

  it('should handle initial state', () => {
    expect(forms(undefined, {})).to.deep.equal({
      isFetching: false,
      selectedForm: {},
      formList: []
    })
  })

  it('should start fetching when FORMS_FETCH', () => {
    expect(
      forms(undefined, {
        type: types.FORMS_FETCH
      })).to.have.property('isFetching', true)
  })

  it('should not empty formlist property when FORMS_SUCCESS', () => {
    expect(formRequest).to.have.property('formList').and.to.have.length.above(0)
  })

  it('should stop fetching when FORMS_SUCCESS', () => {
    expect(formRequest).to.have.property('isFetching', false)
  })

  it('should select a form as an object', () => {
    let id = formsList.content[0].id;
    expect(forms({
      formList: formsList.content
    }, {
      type: types.TOGGLE_FORM,
      id: id
    })).to.have.property('selectedForm').that.is.an('object')
  })

  it('should select a form with an id equal to 53551207804956', () => {
    let id = '53551207804956';
    expect(forms({
      formList: formsList.content
    }, {
      type: types.TOGGLE_FORM,
      id: id
    })).to.have.property('selectedForm').that.is.an('object').with.property('id', id)
  })
})
