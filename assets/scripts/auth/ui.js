'use strict'

const store = require('./../store')
// const api = require('./api')
// const events = require('./../events')

const signUpSuccess = function (data) {
  $('#auth-notice').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#auth-notice').text('Error on sign up: ' + error)
  $('#auth-notice').show()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#auth-notice').text('Signed in successfully')
  $('form').trigger('reset')
  // $('.phase1').hide()
  // $('.phase2').show()
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-notice').text('Error on sign in: ', error)
  $('#auth-notice').show()
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.notices').hide()
  $('#index').hide()
  $('#auth-notice').show()
  $('#auth-notice').text('Signed out successfully')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  // $('.phase2').hide()
  // $('.phase3').hide()
  // $('.phase1').show()
  store.user = null
}

const signOutFailure = function () {
  $('#auth-notice').text('Error on sign out')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#auth-notice').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#auth-notice').text('Error on change password')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
