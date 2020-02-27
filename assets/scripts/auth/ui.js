'use strict'

const store = require('./../store')

const signUpSuccess = function (data) {
  $('#notice').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#notice').text('Error on sign up: ' + error.statusText)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#notice').text('Signed in successfully')
  $('form').trigger('reset')
  store.user = data.user
  $('.signed-in').show()
  $('.signed-out').hide()
  $('.clearElectionsButton').hide()
}

const signInFailure = function (error) {
  $('#notice').text('Error on sign in: ' + error.statusText)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.signed-in').hide()
  $('.input-form').hide()
  $('.signed-out').show()
  $('.content').empty()
  $('#notice').text('Signed out successfully')
  store.user = null
}

const signOutFailure = function (error) {
  $('#notice').text('Error on sign out: ' + error.statusText)
}

const changePasswordSuccess = function () {
  $('#notice').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#notice').text('Error on change password: ' + error.statusText)
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
