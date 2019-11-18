const router = require("express").Router();
const PostsController = require("../../controllers/PostsController");


// Matches with "/api/posts"
router.route("/")
  .get(PostsController.findAll)
  .post(PostsController.create);

// Matches with "/api/post/:id"
router
  .route("/:id")
  .get(PostsController.findById)
  .put(PostsController.update)
  .delete(PostsController.remove);

module.exports = router;
