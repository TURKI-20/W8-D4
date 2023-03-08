import express from "express";
import {
      Login,
      createUser,
      deleteUser,
      updateUser,
      getallUsers
     } from "../controller/user.controller";     
import { validate } from "../middleware/validate";
import auth from "../middleware/auth";
import {  userlogin } from "../zod.schema/user.zod";


let router = express.Router();
router.get('/user', getallUsers)
router.post('/user/login',validate(userlogin), Login)
router.post('/user',createUser)
router.put('/user',auth, updateUser)
router.delete('/user',auth, deleteUser)


export default router;