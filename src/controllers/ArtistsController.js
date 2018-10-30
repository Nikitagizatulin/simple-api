const {
  Artist
} = require('../models')
module.exports = {

  async index (req, res) {
    let queryResult = await Artist.find()
    res.send(JSON.stringify(queryResult))
  },

  async show (req, res) {
    let queryResult = await Artist.findById(req.params.id)
    res.send(JSON.stringify(queryResult))
  },

  async store (req, res) {
    let queryResult = await Artist.create(req.body)
    res.send(JSON.stringify(queryResult))
  },

  put (req, res) {
    Artist.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name })
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send({ error: err })
      })
  },
  destroy (req, res) {
    Artist.findByIdAndRemove(req.params.id)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send({ error: err })
      })
  }
}
