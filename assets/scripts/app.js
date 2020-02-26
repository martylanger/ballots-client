'use strict'

// require my electionEvents and authEvents files to gain access to all the event listeners
const electionEvents = require('./election/events')
const authEvents = require('./auth/events')
const electionUi = require('./election/ui')

$(() => {
  $('#show').on('submit', electionEvents.onShowElection)
  $('#index-button').on('click', electionEvents.onIndexElections)
  $('#index').on('click', electionEvents.onShowElection)
  $('#expansion').on('click', electionEvents.onShowElection)
  $('#election-input').on('submit', electionEvents.onCreateElection)
  $('#create-click').on('click', electionUi.onCreateClick)
  $('#expand-index').on('click', electionUi.onIndexExpand)
  $('#delete').on('click', electionEvents.onDeleteElection)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})
