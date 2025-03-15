const User = require("../Models/usersModel");

// Check id controller using middleware
exports.checkId = async (req, res, next, value) => {
  try {
    const findByID = await User.findById(value);

    if (!findByID) {
      return res.status(404).json({
        status: "fail",
        message: `User with ID ${value} is not found.`,
      });
    }
    next();
  } catch (err) {
    console.log(err, "checkid err");
    return res.status(500).json({
      status: "error",
      message: "Internal servre error",
    });
  }
};

// check body data using middleware before create a new user
exports.validateBody = (req, res, next) => {
  if (!req.body.name || !req.body.gender || !req.body.hobbies) {
    return res.status(400).json({
      status: "fail",
      message: `Request body we did not recieve a name and gender`,
    });
  }
  next();
};

// GET - /api/users get the list of users (READ)
exports.getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

// POST - /api/users create new user (CREATE)
exports.createUser = async (req, res) => {
  const { name, gender, hobbies } = req.body;

  let result = new User({
    name: name,
    gender: gender,
    hobbies: hobbies,
  });

  await result.save();

  return res.status(201).json({
    status: "success",
    data: result,
  });
};

// GET - /api/users/:id get the single user(Dynamic route)
exports.getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const findByID = await User.findById(id);

    return res.status(200).json({
      status: "success",
      data: {
        findByID: findByID,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

// PATCH - /api/users/:id Update the single data
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    let findByIdToUpdate = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(202).json({
      status: "success",
      data: {
        updated: findByIdToUpdate,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

// DELETE - /api/users/:id Delete the single user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    let findByIdToDelete = await User.findByIdAndDelete(id);

    return res.status(200).json({
      status: "success",
      message: "Deleted user",
      data: {
        dle: findByIdToDelete,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};
