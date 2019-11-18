const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");
const MongoClient = require('mongodb').MongoClient;


// Matches with "/api/books"
router.route("/")
  .get(UsersController.findAll)
  .post(UsersController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(UsersController.findById)
  .put(UsersController.update)
  .delete(UsersController.remove);

module.exports = router;