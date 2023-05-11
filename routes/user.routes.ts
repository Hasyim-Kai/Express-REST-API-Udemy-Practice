import user from "../controllers/user.controller";
import { authenticate } from "../middleware/auth";
const router = require("express").Router();

router.get("/", authenticate, user.getAll)
  .get("/profile", authenticate, user.getMyProfile)
  .get("/:id", authenticate, user.findOne)
// .delete("/", user.deleteAll);

// .put("/:id", user.update)
// .delete("/:id", user.del);

export = router;