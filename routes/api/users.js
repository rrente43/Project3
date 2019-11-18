const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");
const MongoClient = require('mongodb').MongoClient;


// Matches with "/api/jumbotron"
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
