const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
      console.log(users)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      user.photos.push(new Photo())
      user.save()
        .then((data) => {
          res.json(data)
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      res.json(users)
      console.log(users)
})
    .catch((err) => console.log(err))
})

router.delete('/:userId', (req, res) => {

    User.findById(req.params.userId)
    .then((user) => {
        user.update({
            $pull:
            { photos: {_id: req.params.id} }
        })
        .then((data) => {
            res.sendStatus(200)
        })
        .catch(console.error)
    })
    .catch(console.error)
});

router.patch('/:userId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
      const update = req.body.photo
      const photo = user.photo.id(req.params.id)
      if (update.title) {
        photo.title = update.title
      }
      if (update.description) {
        photo.description = update.description
      }
      user.save().then((user) => {
        user.photos = user.photos.reverse()
        res.json(user)
      })
    })
  })




module.exports = router