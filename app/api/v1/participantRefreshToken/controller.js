const { StatusCodes } = require('http-status-codes');
const {
  getParticipantRefreshToken,
} = require('../../../services/mongoose/participantRefreshToken');

const index = async (req, res, next) => {
  try {
    const result = await getParticipantRefreshToken(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (err) {
    console.log('err');
    console.log(err);
    next(err);
  }
};

module.exports = { index };
