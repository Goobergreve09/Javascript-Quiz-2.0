// Import the express module and create a router object
const router = require('express').Router();

const path = require('path'); // Import the path module to work with file paths

const apiRoutes = require('./api'); // Import the API routes from the 'api' folder

// Mount the apiRoutes under the /api path
router.use('/api', apiRoutes);

// Serve up React front-end in production
router.use((req, res) => {

  // Send the React front-end file (index.html) when no other routes match
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  
});

// Export the router to be used in other parts of the application
module.exports = router;