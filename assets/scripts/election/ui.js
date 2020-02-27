'use strict'

const store = require('./../store.js')
const indexElectionsTemplate = require('../templates/index.handlebars')
const showElectionTemplate = require('../templates/show.handlebars')

const clearElections = function () {
  console.log('running clearElections')
  $('#notice').empty()
  $('.content').empty()
}

const onIndexSuccess = function (responseData) {
  console.log('running onIndexSuccess')
  const indexElectionsHtml = indexElectionsTemplate({ elections: responseData.elections })
  $('.content').html(indexElectionsHtml)
}

const onIndexFailure = function (error) {
  console.log('running onIndexFailure')
  $('#notice').text('You failed to display your elections: ' + error.statusText)
}

const onShowSuccess = function (data) {
  console.log('running onShowSuccess')
  $('#notice').empty()
  store.updateId = data.election.id
  const showElectionHtml = showElectionTemplate({ election: data.election })
  $('.content').html(showElectionHtml)
}

const onShowFailure = function (error) {
  console.log('running onShowFailure')
  $('#notice').text('You failed to display your election: ' + error.statusText)
}

const onUpdateClick = function (event) {
  event.preventDefault()
  console.log('running onUpdateClick')
  $('#notice').empty()
  $('#update-form').show()
  $('#create-form').hide()
}

const onUpdateSuccess = function (responseData) {
  console.log('running onUpdateSuccess')
  $('#notice').text('You updated your election!')
  onShowSuccess(responseData)
  $('#update-form').hide()
}

const onUpdateFailure = function (error) {
  console.log('running onUpdateFailure')
  $('#notice').text("Your update didn't work: " + error.statusText)
}

const onCreateClick = function (event) {
  event.preventDefault()
  console.log('running onCreateClick')
  $('#notice').empty()
  $('#create-form').show()
  $('#update-form').hide()
}

const onCreateSuccess = function (responseData) {
  console.log('running onCreateSuccess')
  $('#notice').text('You created an election!')
  onShowSuccess(responseData)
  $('form').trigger('reset')
  $('#create-form').hide()
}

const onCreateFailure = function (error) {
  console.log('running onCreateFailure')
  $('#notice').text('You failed to create an election: ' + error.statusText)
}

const onDeleteSuccess = function () {
  console.log('running onDeleteSuccess')
  $('#notice').text('You deleted an election!')
}

const onDeleteFailure = function (error) {
  console.log('running onDeleteFailure')
  $('#notice').text('You failed to delete an election: ' + error.statusText)
}

module.exports = {
  clearElections,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onUpdateClick,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateClick,
  onCreateSuccess,
  onCreateFailure,
  onDeleteSuccess,
  onDeleteFailure
}
