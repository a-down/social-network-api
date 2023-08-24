const router = require('express').Router();
const {
  getUsers
} = require('../../controllers/userController')


// /api/users
router.route('/')
  .get(getUsers)
  // .post(createUser);

module.exports = router;