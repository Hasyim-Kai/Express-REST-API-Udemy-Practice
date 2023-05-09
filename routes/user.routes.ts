import user from "../controllers/user.controller";
const router = require("express").Router();

router.get("/", user.getAll)
.get("/:id", user.findOne)
// .delete("/", user.deleteAll);

// .put("/:id", user.update)
// .delete("/:id", user.del);

export = router;