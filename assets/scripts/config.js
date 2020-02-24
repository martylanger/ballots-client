'use strict'
// WHICH SLASHES DO I WANT AT THE END OF MY apiUrls?????
let apiUrl
const apiUrls = {
  production: 'https://rocky-lake-61968.herokuapp.com',
  development: 'http://localhost:4741/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
