const router = require('express').Router();

const { User } = require('../db/models');

// signup
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(signedUpUser => {
    // req.login comes from passport
    // it triggers serialize user
    req.login(signedUpUser, (err) => {
      if (err) next(err);
      else res.status(201).json(signedUpUser);
    });
  })
  .catch(next);
});

// login
router.put('/', (req, res, next) => {
  User.findOne({
    where: req.body
  })
  .then(loggedInuser => {
    // req.login comes from passport
    // it triggers serialize user
    req.login(loggedInuser, (err) => {
      if (err) next(err);
      else res.json(loggedInuser);
    });
  })
  .catch(next);
});

// fetch currently logged in user
router.get('/', (req, res, next) => {
  res.json(req.user || {});
});

// logout
router.delete('/', (req, res, next) => {
  // req.logout comes from passport
  // removes any passport user session data
  req.logout();
  res.sendStatus(204);
});

module.exports = router;
