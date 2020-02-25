'use strict'

const store = require('./../store.js')

const displayElection = function (data) {
  console.log('running displayElection')
  $('#auth-notice').hide()
  $('#notice2').hide()
  $('.expand').hide()
  $('form').trigger('reset')
  $('#name').text('Name: ' + data.election.name)
  if (data.election.voting_method) { $('#voting-method').text('Voting method: ' + data.election.voting_method) }
  if (data.election.option1) { $('#option1').text('Option 1: ' + data.election.option1) }
  if (data.election.option2) { $('#option2').text('Option 2: ' + data.election.option2) }
  if (data.election.option3) { $('#option3').text('Option 3: ' + data.election.option3) }
  if (data.election.option4) { $('#option4').text('Option 4: ' + data.election.option4) }
  if (data.election.option5) { $('#option5').text('Option 5: ' + data.election.option5) }
  if (data.election.option6) { $('#option6').text('Option 6: ' + data.election.option6) }
  if (data.election.option7) { $('#option7').text('Option 7: ' + data.election.option7) }
  if (data.election.option8) { $('#option8').text('Option 8: ' + data.election.option8) }
  if (data.election.option9) { $('#option9').text('Option 9: ' + data.election.option9) }
  if (data.election.results) { $('#results').text('Results: ' + data.election.results) }
}

const onShowSuccess = function (responseData) {
  console.log('running onShowSuccess')
  $('#notice').text("Here's your election!")
  displayElection(responseData)
}

const onIndexSuccess = function (responseData) {
  console.log('running onIndexSuccess')
  store.elections = responseData.elections
  $('#auth-notice').hide()
  $('#notice2').hide()
  $('#notice').html('Here are your elections!')
  for (let i = 0; i < 10; i++) {
    if (responseData.elections[i]) {
      $('#name').append(
        "<div id='" + responseData.elections[i].id + "' class='shower'>" + responseData.elections[i].name + " (id: " + responseData.elections[i].id + ")</div>"
      )
      $('.expand').show()
    } else {
      $('.expand').hide()
    }
  }
  $('form').trigger('reset')
  console.log(responseData.elections)
}

const onIndexExpand = function () {
  console.log('running onIndexExpand')
  $('.expand').hide()
  for (let i = 10; i < store.elections.length; i++) {
    $('#name').append('<div>' + store.elections[i].name + ' (id: ' + store.elections[i].id + ') </div>')
  }
}

const onUpdateSuccess = function (responseData) {
  console.log('running onUpdateSuccess')
  $('#notice').html('You updated your election!')
  displayElection(responseData)
}

const onUpdateFailure = function (responseData) {
  console.log('running onUpdateFailure')
  $('#notice').html("Your update didn't work.")
  $('form').trigger('reset')
}

const onCreateSuccess = function (responseData) {
  console.log('running onCreateSuccess')
  $('#notice').text('You created an election!')
  displayElection(responseData)
}

const onCreateFailure = function (responseData) {
  console.log('running onCreateFailure')
  $('#auth-notice').html('You failed to create an election.')
  $('form').trigger('reset')
}

module.exports = {
  onShowSuccess,
  onIndexSuccess,
  onIndexExpand,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
