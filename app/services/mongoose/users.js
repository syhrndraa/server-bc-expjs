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
  let condition = { role: 'organizer' };
  const result = await Users.find(condition);

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

const deleteAdmins = async (req) => {
  const { id } = req.params;

  const result = await Users.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`Tidak ada admin dengan id :  ${id}`);

  await result.deleteOne();

  return result;
};
module.exports = {
  createOrganizer,
  createUsers,
  getAllAdmins,
  deleteAdmins,
  getAllUsers,
};
