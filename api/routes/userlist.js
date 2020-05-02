const express = require('express');
const router = express.Router();
//ilgili bağımlılıkların yüklenmesi ve expresten router alınması
const userListController = require('./controllers/userlist')
    //ilgili endpoint isteklerinin tanımlanması ve controllerardan ilgili endpointlere göre fonksiyonların çağırılması
router.get("/", userListController.get_user_list);
router.post("/", userListController.create_user);
router.get("/:userId", userListController.show_user);
router.put("/:userId", userListController.update_user);
router.delete("/:userId", userListController.delete_user);

//rotanın export edilmesi
module.exports = router;