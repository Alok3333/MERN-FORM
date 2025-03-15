const express = require("express");
const usersController = require("../Controllers/usersController");

// Created usersRouter (router)
const router = express.Router();

router.param("id", usersController.checkId);

// Users routes
router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.validateBody, usersController.createUser);

router
  .route("/:id")
  .get(usersController.getSingleUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
