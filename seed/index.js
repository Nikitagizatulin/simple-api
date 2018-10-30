let {
  Artist
} = require('../src/models')
const artists = require('./artists')
//  clear table and seed them
Artist.deleteMany({}, () => {})
artists.map(art => {
  console.log(`Add into Artist table field ${JSON.stringify(art)}`)
  Artist.create(art)
})
