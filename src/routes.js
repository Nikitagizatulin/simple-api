const ArtistsController = require('./controllers/ArtistsController')
const HomeController = require('./controllers/HomeController')
module.exports = (app) => {
  app.get('/',
    HomeController.index)

  app.get('/artists',
    ArtistsController.index)
  app.post('/artists',
    ArtistsController.store)
  app.get('/artist/:id',
    ArtistsController.show)
  app.put('/artist/:id',
    ArtistsController.put)
  app.delete('/artist/:id',
    ArtistsController.destroy)
}
