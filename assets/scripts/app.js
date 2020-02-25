'use strict'

// require my electionEvents and authEvents files to gain access to all the event listeners
const electionEvents = require('./election/events')
const authEvents = require('./auth/events')
const electionUi = require('./election/ui')

$(() => {
  $('#show').on('submit', electionEvents.onShowElection)
  $('#index').on('click', electionEvents.onIndexElections)
  $('#election-display').on('click', electionEvents.onShowElection)
  $('#election-input').on('submit', electionEvents.onCreateElection)
  $('#expand-index').on('click', electionUi.onIndexExpand)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})
