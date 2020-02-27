'use strict'

const store = require('./../store')
// const api = require('./api')
// const events = require('./../events')

const signUpSuccess = function (data) {
  $('#notice').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#notice').text('Error on sign up: ' + error)
  $('#notice').show()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#notice').text('Signed in successfully')
  $('form').trigger('reset')
  store.user = data.user
  $('.signed-in').show()
  $('.signed-out').hide()
}

const signInFailure = function (error) {
  $('#notice').text('Error on sign in: ', error)
  $('#notice').show()
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.notices').hide()
  $('.content').hide()
  $('.signed-in').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#notice').show()
  $('#notice').text('Signed out successfully')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#notice').text('Error on sign out')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#notice').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#notice').text('Error on change password')
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
