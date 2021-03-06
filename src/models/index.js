require('dotenv').config()
const fs = require('fs')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME || 'api'}`, { useNewUrlParser: true })
const dbs = {
  mongoose
}

fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    let modelName = file.replace('.js', '')
    dbs[modelName] = mongoose.model(modelName, require(`./${file}`)(mongoose))
    // const model = sequelize.import(path.join(__dirname, file))
  })

module.exports = dbs
