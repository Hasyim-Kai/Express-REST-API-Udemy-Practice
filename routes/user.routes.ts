import user from "../controllers/user.controller";
const router = require("express").Router();

router.get("/", user.getAll)
.post("/", user.signUp)
// .delete("/", user.deleteAll);

// router.get("/:id", user.findOne)
// .put("/:id", user.update)
// .delete("/:id", user.del);

export = router;