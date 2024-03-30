// Import the express module and create a router object
const router = require('express').Router();

// Import the userRoutes module from the user-routes.js file
const userRoutes = require('./user-routes');

// Mount the userRoutes under the /users path
router.use('/users', userRoutes);

// Export the router to be used in other parts of the application
module.exports = router;