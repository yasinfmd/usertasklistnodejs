const express = require('express');
const router = express.Router();
const userListController = require('./controllers/userlist')
router.get("/", userListController.get_user_list);

router.post("/", userListController.create_user);

router.get("/:userId", userListController.show_user);

router.put("/:userId", userListController.update_user);
router.delete("/:userId", userListController.delete_user);
module.exports = router;