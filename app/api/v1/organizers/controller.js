const { StatusCodes } = require('http-status-codes');

const {
  createOrganizer,
  createUsers,
  getAllUsers,
  getAllAdmins,
  deleteAdmins,
} = require('../../../services/mongoose/users');

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getCMSAdmins = async (req, res, next) => {
  try {
    const result = await getAllAdmins(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCMSAdmins = async (req, res, next) => {
  try {
    const result = await deleteAdmins(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
  getCMSAdmins,
  deleteCMSAdmins,
};
