const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/organizers/model');
const { BadRequestError } = require('../../errors');

const createOrganizer = async (req) => {
  const { organizer, role, email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    email,
    name,
    password,
    organizer: result._id,
    role,
  });

  delete users._doc.password;

  return users;
};

const createUsers = async (req, res) => {
  const { name, password, role, confirmPassword, email } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const result = await Users.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

const getAllUsers = async (req) => {
  const { keyword } = req.query;
  let condition = { role: 'organizer' };

  if (keyword) {
    condition = {
      ...condition,
      name: { $regex: keyword, $options: 'i' },
    };
  }
  const result = await Users.find(condition);

  return result;
};

const getOneUsers = async (req) => {
  const { id } = req.params;
  const result = await Users.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada user dengan id :  ${id}`);

  return result;
};

const getAllAdmins = async (req) => {
  const { keyword } = req.query;
  let condition = { organizer: req.user.organizer, role: 'admin' };

  if (keyword) {
    condition = {
      ...condition,
      name: { $regex: keyword, $options: 'i' },
    };
  }
  const result = await Users.find(condition);

  return result;
};

const deleteUsers = async (req) => {
  const { id } = req.params;

  const result = await Users.findOne({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada admin dengan id :  ${id}`);

  await result.deleteOne();

  return result;
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, password, role, confirmPassword, email } = req.body;

  const check = await Users.findOne({
    _id: id,
  });

  if (!check) throw new NotFoundError(`Tidak ada user dengan id :  ${id}`);

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const result = await Users.findOneAndUpdate({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

module.exports = {
  createOrganizer,
  createUsers,
  getAllAdmins,
  deleteUsers,
  updateUsers,
  getAllUsers,
  getOneUsers,
};
