import express from "express";
import {
  addProject,
  contact,
  deleteProject,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
  contact,
} from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

userRouter.route("/contact").post(contact);
