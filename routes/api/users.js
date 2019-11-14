const router = require("express").Router();
const usersController = require("../../controllers/UsersController");
const MongoClient = require('mongodb').MongoClient;
const Prj3 = require('util').format;


// Matches with "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
