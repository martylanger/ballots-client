'use strict'

// require my electionEvents and authEvents files to gain access to all the event listeners
const electionEvents = require('./election/events')
const authEvents = require('./auth/events')
const electionUi = require('./election/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('.indexButton').on('click', electionEvents.onIndexElections)
  $('.clearElectionsButton').on('click', electionEvents.onClearElections)

  $('.createElectionButton').on('click', electionUi.onCreateClick)
  $('#create-form').on('submit', electionEvents.onCreateElection)

  $('.content').on('click', '.updateElectionButton', electionUi.onUpdateClick)
  $('#update-form').on('submit', electionEvents.onUpdateElection)

  $('.content').on('click', '.show-election', electionEvents.onShowElection)
  $('.content').on('click', '.delete-election', electionEvents.onDeleteElection)
  $('.content').on('click', '.index-elections', electionEvents.onIndexElections)
})
