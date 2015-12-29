import chai, { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions';

const id = '53551207804956';

describe('Widget app actions', () => {
  it('toggleWidget should create TOGGLE_WIDGET action', () => {
    expect(actions.toggleWidget(id))
      .to.be.an('object')
      .that.is.deep.equal({
        type: types.TOGGLE_WIDGET,
        id
      })
  })

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm(id))
      .to.be.an('object')
      .that.is.deep.equal({
        type: types.TOGGLE_FORM,
        id
      })
  })

  it('fetchForms should create 3 action types FORMS_FETCH, FORMS_SUCCESS and FORMS_FAILURE', () => {
    expect(actions.fetchForms({
      apikey: '4cf8b41e95cd56c492594bb245ac2ffb'
    }))
      .to.have.property('types')
      .that.is.an('array')
      .that.include.members([types.FORMS_FETCH, types.FORMS_SUCCESS, types.FORMS_FAILURE])
  })
})
