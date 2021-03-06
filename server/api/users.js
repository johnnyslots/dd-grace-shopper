const router = require('express').Router()
const {User} = require('../db/models')
const { requireAdmin, isAdminOrSelf } = require('./utils');
module.exports = router

router.get('/', requireAdmin, (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/:id', isAdminOrSelf, (req, res, next) => {
  const id = req.params.id;
  delete req.body.password;
  User.update(req.body, {
    where: { id }
  })
  .then(()=> {
    return User.findById(id, {
      attributes: { exclude: [ 'password' ]}
    })
  })
  .then((updatedUser) => {
    res.json(updatedUser);
  })
  .catch(next)
})

router.delete('/:id', isAdminOrSelf, (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: { id }
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

