import auth from "../controllers/auth.controller";
import authMiddleware from "../middleware/validator";
const router = require("express").Router();

router.post("/login", auth.login)
.post("/register", authMiddleware.validateRegister, auth.signUp);

export = router;