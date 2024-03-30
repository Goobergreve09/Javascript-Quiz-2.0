const router = require("express").Router();

const {
  createUser,
  getAllUsers,
  login,
  updateUserHighScores
} = require("../../controllers/user-controllers");

// any POST request sent to the /api/users endpoint will be handled by the createUser function
// This function will be responsible for creating a new user in your database based on the data received in the request body.
const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser).put(authMiddleware);


router.route("/login").post(login);

router.route('/highscores').post(authMiddleware,updateUserHighScores);

// getAllUsers should retrieve all user data from the database.

router.route("/").get(getAllUsers);


module.exports = router;
