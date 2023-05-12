import auth from "../controllers/auth.controller";
import { checkValidationResult, createValidationFor } from "../middleware/validator";
const router = require("express").Router();

router.post("/login", auth.login)
  .post("/register", createValidationFor('register'), checkValidationResult, auth.signUp);

export = router;