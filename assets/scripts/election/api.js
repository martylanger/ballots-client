'use strict'

const config = require('./../config')
const store = require('./../store')

const update = function (id, election) {
  console.log(id)
  console.log(election)
  return $.ajax({
    url: config.apiUrl + '/elections/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: election
  })
}

const create = function (election) {
  return $.ajax({
    url: config.apiUrl + '/elections',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: election
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/elections/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/elections/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/elections',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  update,
  create,
  destroy,
  show,
  index
}
