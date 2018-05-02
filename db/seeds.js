require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise


const { User, Photo, Weight } = require('./schema')

const Weight_In = new Weight(
  {
    WeighIn: 200,
    Comment: 'Working on getting my weight down'
  }
)

const day_1 = new Photo({
  title: 'Starting my weight loss journey',
  description: "I'm excited about finally committing to making a change"
})
const day_15 = new Photo({
  title: 'Half way through',
  description: "I can finally see the changes in my body!!"
})
const Tyler = new User({
  userName: 'Tyler_fr0st',
  password: 'youllneverguess1',
  photos: [Day_1, Day_15]
})

User.remove({})
  .then(() => Tyler.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
  .catch(console.error)