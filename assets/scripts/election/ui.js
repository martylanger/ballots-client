'use strict'

const store = require('./../store.js')

const displayElection = function (data) {
  console.log('running displayElection')
  $('#name').text('')
  $('#voting_method').text('')
  $('#option1').text('')
  $('#option2').text('')
  $('#option3').text('')
  $('#option4').text('')
  $('#option5').text('')
  $('#option6').text('')
  $('#option7').text('')
  $('#option8').text('')
  $('#option9').text('')
  $('#results').text('')
  $('form').trigger('reset')
  $('#auth-notice').hide()
  $('#notice2').hide()
  $('.expand').hide()
  $('#index').hide()
  $('#expansion').hide()
  $('#election-display').show()
  $('#name').text('Name: ' + data.election.name)
  if (data.election.voting_method) { $('#voting_method').text('Voting method: ' + data.election.voting_method) }
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
  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  console.log('running onIndexSuccess')
  store.elections = responseData.elections
  $('#auth-notice').hide()
  $('#notice2').hide()
  $('#election-display').hide()
  $('#notice').html('Here are your elections!')
  $('#index').show()
  // If the index is expandable, show the expand button
  if (!store.notALot) {
    $('.expand').show()
  }
  // If the index hasn't been populated yet
  if (!store.indexed) {
    store.indexed = true
    // Display 10 newest elections
    for (let i = 0; i < 10; i++) {
      if (responseData.elections[i]) {
        $('#index').append(
          "<div id='" + responseData.elections[i].id + "' class='shower'>" + responseData.elections[i].name + " (id: " + responseData.elections[i].id + ")</div>"
        )
        $('.expand').show()
      } else {
        $('.expand').hide()
        store.notALot = true
      }
    }
  }
}

const onIndexExpand = function () {
  console.log('running onIndexExpand')
  $('.expand').hide()
  $('#expansion').show()
  if (!store.expanded) {
    for (let i = 10; i < store.elections.length; i++) {
      $('#expansion').append(
        "<div id='" + store.elections[i].id + "' class='shower'>" + store.elections[i].name + " (id: " + store.elections[i].id + ")</div>"
      )
    }
  }
  store.expanded = true
}

const onUpdateSuccess = function (responseData) {
  console.log('running onUpdateSuccess')
  $('#notice').text('You updated your election!')
  displayElection(responseData)
}

const onUpdateFailure = function (responseData) {
  console.log('running onUpdateFailure')
  $('#notice').text("Your update didn't work.")
  $('form').trigger('reset')
}

const onCreateClick = function (event) {
  event.preventDefault()
  $('#election-input').show()
}

const onCreateSuccess = function (responseData) {
  console.log('running onCreateSuccess')
  $('#notice').text('You created an election!')
  displayElection(responseData)
  $('#election-input').hide()
}

const onCreateFailure = function (responseData) {
  console.log('running onCreateFailure')
  $('#auth-notice').html('You failed to create an election.')
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
  console.log('running onDeleteSuccess')
  store.indexed = false
  store.expanded = false
  store.showIndex = false
  $('#index').text()
  $('#notice').text('You deleted an election!')
}

module.exports = {
  onShowSuccess,
  onIndexSuccess,
  onIndexExpand,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateClick,
  onCreateSuccess,
  onCreateFailure,
  onDeleteSuccess
}
