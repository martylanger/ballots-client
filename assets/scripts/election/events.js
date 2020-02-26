'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store')
const getFormFields = require(`../../../lib/get-form-fields`)

require('./../app.js')

const onIndexElections = function (event) {
  if (event) {
    event.preventDefault()
    console.log('running onIndexElections')
  }
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onClearElections = function (event) {
  event.preventDefault()
  ui.clearElections()
}

const onShowElection = function (event) {
  event.preventDefault()
  console.log('running onShowElection')
  const id = $(event.target).closest('section').data('id')
  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

// const electionJSON = function (event) {
//   const data =
//   {
//     'election': {
//       'name': getFormFields(this).name,
//       'voting_method': getFormFields(this).voting_method,
//       'option1': getFormFields(this).option1,
//       'option2': getFormFields(this).option2,
//       'option3': getFormFields(this).option3,
//       'option4': getFormFields(this).option4,
//       'option5': getFormFields(this).option5,
//       'option6': getFormFields(this).option6,
//       'option7': getFormFields(this).option7,
//       'option8': getFormFields(this).option8,
//       'option9': getFormFields(this).option9
//     }
//   }
//   return data
// }

const onUpdateElection = function (event) {
  event.preventDefault()
  const id = store.updateId
  const data =
  {
    'election': {
      'name': getFormFields(this).name,
      'voting_method': getFormFields(this).voting_method,
      'option1': getFormFields(this).option1,
      'option2': getFormFields(this).option2,
      'option3': getFormFields(this).option3,
      'option4': getFormFields(this).option4,
      'option5': getFormFields(this).option5,
      'option6': getFormFields(this).option6,
      'option7': getFormFields(this).option7,
      'option8': getFormFields(this).option8,
      'option9': getFormFields(this).option9
    }
  }

  api.update(id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onCreateElection = function (event) {
  event.preventDefault()
  const data =
  {
    'election': {
      'name': getFormFields(this).name,
      'voting_method': getFormFields(this).voting_method,
      'option1': getFormFields(this).option1,
      'option2': getFormFields(this).option2,
      'option3': getFormFields(this).option3,
      'option4': getFormFields(this).option4,
      'option5': getFormFields(this).option5,
      'option6': getFormFields(this).option6,
      'option7': getFormFields(this).option7,
      'option8': getFormFields(this).option8,
      'option9': getFormFields(this).option9
    }
  }

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onDeleteElection = function (event) {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .then(onIndexElections)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onShowElection,
  onIndexElections,
  onClearElections,
  onUpdateElection,
  onCreateElection,
  onDeleteElection
}
