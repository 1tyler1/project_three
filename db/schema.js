const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  description: String
})

const Creature = mongoose.model('Creature', CreatureSchema)

module.exports = {
  Creature
}