'use strict'

const store = require('./../store.js')
const indexElectionsTemplate = require('../templates/index.handlebars')
const showElectionTemplate = require('../templates/show.handlebars')

const clearElections = function () {
  console.log('running clearElections')
  $('#notice').text('')
  $('.content').empty()
}

const onIndexSuccess = function (responseData) {
  console.log('running onIndexSuccess')
  const indexElectionsHtml = indexElectionsTemplate({ elections: responseData.elections })
  $('.content').html(indexElectionsHtml)
}

const onIndexFailure = function () {
  console.log('running onIndexFailure')
  $('#notice').text('You failed to index the elections.')
}

const onShowSuccess = function (data) {
  console.log('running onShowSuccess')
  $('#notice').text('')
  store.updateId = data.election.id
  const showElectionHtml = showElectionTemplate({ election: data.election })
  $('.content').html(showElectionHtml)
}

const onUpdateClick = function (event) {
  event.preventDefault()
  console.log('running onUpdateClick')
  $('#notice').text('')
  $('#update-form').show()
}

const onUpdateSuccess = function (responseData) {
  console.log('running onUpdateSuccess')
  $('#notice').text('You updated your election!')
  onShowSuccess(responseData)
  $('#update-form').hide()
}

const onUpdateFailure = function (responseData) {
  console.log('running onUpdateFailure')
  $('#notice').text("Your update didn't work.")
}

const onCreateClick = function (event) {
  event.preventDefault()
  console.log('running onCreateClick')
  $('#notice').text('')
  $('#create-form').show()
  $('.submit-create').show()
}

const onCreateSuccess = function (responseData) {
  console.log('running onCreateSuccess')
  $('#notice').text('You created an election!')
  onShowSuccess(responseData)
  $('form').trigger('reset')
  $('#create-form').hide()
}

const onCreateFailure = function (responseData) {
  console.log('running onCreateFailure')
  $('#notice').html('You failed to create an election.')
}

const onDeleteSuccess = function () {
  console.log('running onDeleteSuccess')
  $('#notice').text('You deleted an election!')
}

const onDeleteFailure = function () {
  console.log('running onDeleteFailure')
  $('#notice').html('You failed to delete an election.')
}

module.exports = {
  clearElections,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onUpdateClick,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateClick,
  onCreateSuccess,
  onCreateFailure,
  onDeleteSuccess,
  onDeleteFailure
}
