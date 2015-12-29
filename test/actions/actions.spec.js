import chai, { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions';

const id = '53551207804956';

describe('Widget app actions', () => {
  it('toggleWidget should create TOGGLE_WIDGET and SELECT_WIDGET action', () => {
    let widget = {
      id
    };
    expect(actions.toggleWidget(widget))
      .to.be.an('object')
      .that.is.deep.equal({
        types: [
          {
            type: types.TOGGLE_WIDGET,
            id: widget.id
          },
          {
            type: types.SELECT_WIDGET,
            widget
          }
        ]
      })
  })

  it('toggleForm should create TOGGLE_FORM and SELECT_FORM action', () => {
    let form = {
      id
    };
    expect(actions.toggleForm(form))
      .to.be.an('object')
      .that.is.deep.equal({
        types: [
          {
            type: types.TOGGLE_FORM,
            id: form.id
          },
          {
            type: types.SELECT_FORM,
            form
          }
        ]
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
