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

const onBack = function (event) {
  if (event) {
    event.preventDefault()
  }
  ui.hideUpdateForm()
  onIndexElections(event)
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
  // If user enters a value for the field, the field gets that value,
  // otherwise it keeps its old value
  const newName =
    getFormFields(this).name ? getFormFields(this).name : store.election.name
  const newVotingMethod =
    getFormFields(this).voting_method ? getFormFields(this).voting_method : store.election.voting_method
  const newOption1 =
    getFormFields(this).option1 ? getFormFields(this).option1 : store.election.option1
  const newOption2 =
    getFormFields(this).option2 ? getFormFields(this).option2 : store.election.option2
  const newOption3 =
    getFormFields(this).option3 ? getFormFields(this).option3 : store.election.option3
  const newOption4 =
    getFormFields(this).option4 ? getFormFields(this).option4 : store.election.option4
  const newOption5 =
    getFormFields(this).option5 ? getFormFields(this).option5 : store.election.option5
  const newOption6 =
    getFormFields(this).option6 ? getFormFields(this).option6 : store.election.option6
  const newOption7 =
    getFormFields(this).option7 ? getFormFields(this).option7 : store.election.option7
  const newOption8 =
    getFormFields(this).option8 ? getFormFields(this).option8 : store.election.option8
  const newOption9 =
    getFormFields(this).option9 ? getFormFields(this).option9 : store.election.option9

  const data =
  {
    'election': {
      'name': newName,
      'voting_method': newVotingMethod,
      'option1': newOption1,
      'option2': newOption2,
      'option3': newOption3,
      'option4': newOption4,
      'option5': newOption5,
      'option6': newOption6,
      'option7': newOption7,
      'option8': newOption8,
      'option9': newOption9
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
    .then(onBack)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onShowElection,
  onIndexElections,
  onBack,
  onClearElections,
  onUpdateElection,
  onCreateElection,
  onDeleteElection
}
