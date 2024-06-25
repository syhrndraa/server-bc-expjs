const Users = require('../../api/v1/users/model');
const { BadRequestError, UnauthorizedError } = require('../../errors');
const { createUserToken, createJWT, createRefreshJWT } = require('../../utils');
const { createUserRefreshToken } = require('./userRefreshToken');
const signin = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await Users.findOne({ email: email });

  if (!result) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const isPasswordCorrect = await result.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  const token = createJWT({ payload: createUserToken(result) });

  const refreshToken = createRefreshJWT({ payload: createUserToken(result) });
  await createUserRefreshToken({
    refreshToken,
    user: result._id,
  });

  return { token, refreshToken, role: result.role, email: result.email };
  // return { token, role: result.role, email: result.email };
};

module.exports = { signin };
