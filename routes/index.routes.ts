const express = require('express');
const router  = express.Router();
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

router.use('/auth', authRoutes)
.use('/user', userRoutes);


module.exports = router;