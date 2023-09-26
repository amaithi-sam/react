const express = require("express");
const router = express.Router();



let control = require("../../controllers/index");


//------------------------------------------------------
//         USER ROUTES
//------------------------------------------------------
router.post("/register", control.v2_user.registerUser);
router.post("/login", control.v2_user.loginUser);


//------------------------------------------------------
//          USER INFO ROUTES
//------------------------------------------------------
router.get("/userinfo/:id", control.v2_user.currentUserInfo);
router.post("/userinfo/:id", control.v2_user.createUpdateUserInfo);



// MODULE EXPORTS
module.exports = router;