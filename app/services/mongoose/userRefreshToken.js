const UserRefreshToken = require('../../api/v1/userRefreshToken/model');
const {
  isTokenValidRefreshToken,
  createJWT,
  createUserToken,
} = require('../../utils');
const Users = require('../../api/v1/users/model');
const { NotFoundError, BadRequestError } = require('../../errors');

const createUserRefreshToken = async (payload) => {
  const result = await UserRefreshToken.create(payload);

  return result;
};

const getUserRefreshToken = async (req) => {
  const { refreshToken, email } = req.params;
  const result = await UserRefreshToken.findOne({
    refreshToken,
  });

  if (!result) throw new NotFoundError(`refreshToken tidak valid `);

  const payload = isTokenValidRefreshToken({ token: result.refreshToken });

  const userCheck = await Users.findOne({ email: payload.email });
  if (email !== payload.email) {
    throw new BadRequestError('Email tidak valid');
  }

  const token = createJWT({ payload: createUserToken(userCheck) });

  return token;
};

module.exports = {
  createUserRefreshToken,
  getUserRefreshToken,
};
