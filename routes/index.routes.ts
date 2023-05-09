const express = require('express');
const router  = express.Router();
import userRoutes from "./user.routes";

// router.get('/', homepageController);
router.use('/user', userRoutes);
// router.use('/post', tutorialRoutes);


module.exports = router;