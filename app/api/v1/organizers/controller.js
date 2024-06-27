const { StatusCodes } = require('http-status-codes');

const {
  createOrganizer,
  createUsers,
  getAllUsers,
  getOneUsers,
  getAllAdmins,
  deleteUsers,
  updateUsers,
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

const getOneCMSUsers = async (req, res, next) => {
  try {
    const result = await getOneUsers(req);
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

const deleteCMSUsers = async (req, res, next) => {
  try {
    const result = await deleteUsers(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const putCMSUsers = async (req, res, next) => {
  try {
    const result = await updateUsers(req);
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
  getOneCMSUsers,
  getCMSAdmins,
  deleteCMSUsers,
  putCMSUsers,
};
