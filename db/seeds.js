require('dotenv').config()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const { User, Photo } = require('./schema')

const Day_1 = new Photo({
  title: 'Starting my weight loss journey',
  description: "I'm excited about finally committing to making a change"
})
const Day_15 = new Photo({
  title: 'Build a Car',
  description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})
const Tyler = new User({
  userName: 'Tyler_fr0st',
  password: 'youllneverguess1',
  ideas: [Day_1, Day_15]
})

User.remove({})
  .then(() => Tyler.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
  .catch(console.error)