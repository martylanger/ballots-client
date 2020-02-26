'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const authApi = require('./../auth/api.js')
const store = require('./../store')
const getFormFields = require(`../../../lib/get-form-fields`)

require('./../app.js')

const onIndexElections = function () {
  event.preventDefault()
  store.showIndex = true
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowElection = function (event) {
  event.preventDefault()
  console.log('running onShowElection')
  let id = null
  if (getFormFields(this).id) {
    id = getFormFields(this).id
  } else if (store.showIndex) {
    id = event.target.id
    store.showIndex = false
  }
  if (id) {
    store.id = id
    api.show(id)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  }
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

  api.update(data)
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
  const id = store.id
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onShowElection,
  onIndexElections,
  onUpdateElection,
  onCreateElection,
  onDeleteElection
}
