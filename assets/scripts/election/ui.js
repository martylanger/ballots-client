'use strict'

const store = require('./../store.js')
const indexElectionsTemplate = require('../templates/index.handlebars')
const showElectionTemplate = require('../templates/show.handlebars')

const isClearable = function () {
  $('.content').text().length > 1 ? $('.clearElectionsButton').show() : $('.clearElectionsButton').hide()
  // console.log($('.content').text().length)
  console.log($('.content').text().length > 1)
  return $('.content').text().length > 1
}

const hideUpdateForm = function () {
  $('#update-form').hide()
  store.updateForm = false
  $('.updateElectionButton').text('Edit')
}

const hideCreateForm = function () {
  $('#create-form').hide()
  store.createForm = false
  $('.createElectionButton').text('New election')
}

const clearElections = function () {
  // console.log('running clearElections')
  $('#notice').empty()
  $('.content').empty()
  hideUpdateForm()
  isClearable()
}

const onIndexSuccess = function (responseData) {
  // console.log('running onIndexSuccess')
  hideUpdateForm()
  const indexElectionsHtml = indexElectionsTemplate({ elections: responseData.elections })
  $('.content').html(indexElectionsHtml)
  if (!isClearable()) {
    $('#notice').text("You don't have any elections! Try making a new election.")
  }
}

const onIndexFailure = function (error) {
  // console.log('running onIndexFailure')
  $('#notice').text('You failed to display your elections: ' + error.statusText)
}

const onShowSuccess = function (data) {
  // console.log('running onShowSuccess')
  $('#notice').empty()
  // Save election and id to facilitate update and delete
  store.election = data.election
  store.updateId = data.election.id
  const showElectionHtml = showElectionTemplate({ election: data.election })
  $('.content').html(showElectionHtml)
  isClearable()
}

const onShowFailure = function (error) {
  // console.log('running onShowFailure')
  $('#notice').text('You failed to display your election: ' + error.statusText)
}

const onUpdateClick = function (event) {
  event.preventDefault()
  // console.log('running onUpdateClick')
  if (!store.updateForm) {
    hideCreateForm()
    $('#notice').empty()
    $('#update-form').show()
    store.updateForm = true
    $('.updateElectionButton').text('Cancel')
  } else {
    hideUpdateForm()
  }
}

const onUpdateSuccess = function (responseData) {
  // console.log('running onUpdateSuccess')
  $('#notice').text('You updated your election!')
  $('form').trigger('reset')
  onShowSuccess(responseData)
  hideUpdateForm()
  isClearable()
}

const onUpdateFailure = function (error) {
  // console.log('running onUpdateFailure')
  $('#notice').text("Your update didn't work: " + error.statusText)
}

const onCreateClick = function (event) {
  event.preventDefault()
  // console.log('running onCreateClick')
  if (!store.createForm) {
    hideUpdateForm()
    $('#notice').empty()
    $('#create-form').show()
    store.createForm = true
    $('.createElectionButton').text('Cancel')
  } else {
    hideCreateForm()
  }
}

const onCreateSuccess = function (responseData) {
  // console.log('running onCreateSuccess')
  $('#notice').text('You created an election!')
  $('form').trigger('reset')
  onShowSuccess(responseData)
  hideCreateForm()
  isClearable()
}

const onCreateFailure = function (error) {
  // console.log('running onCreateFailure')
  $('#notice').text('You failed to create an election: ' + error.statusText)
}

const onDeleteSuccess = function () {
  // console.log('running onDeleteSuccess')
  $('#notice').text('You deleted an election!')
}

const onDeleteFailure = function (error) {
  // console.log('running onDeleteFailure')
  $('#notice').text('You failed to delete an election: ' + error.statusText)
}

module.exports = {
  clearElections,
  hideUpdateForm,
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
