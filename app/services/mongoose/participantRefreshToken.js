const ParticipantRefreshToken = require('../../api/v1/participantRefreshToken/model');
const {
  isTokenValidRefreshToken,
  createJWT,
  createParticipantToken,
} = require('../../utils');
const Participants = require('../../api/v1/participants/model');
const { NotFoundError, BadRequestError } = require('../../errors');

const createParticipantRefreshToken = async (payload) => {
  const result = await ParticipantRefreshToken.create(payload);

  return result;
};

const getParticipantRefreshToken = async (req) => {
  const { refreshToken, email } = req.params;
  console.log('email');
  const result = await ParticipantRefreshToken.findOne({
    refreshToken,
  });

  if (!result) throw new NotFoundError(`refreshToken tidak valid `);

  const payload = isTokenValidRefreshToken({ token: result.refreshToken });

  const participantCheck = await Participants.findOne({ email: payload.email });
  if (email !== payload.email) {
    throw new BadRequestError('Email tidak valid');
  }

  const token = createJWT({
    payload: createParticipantToken(participantCheck),
  });

  return token;
};

module.exports = {
  createParticipantRefreshToken,
  getParticipantRefreshToken,
};
