const mongoose = require('mongoose');

const participantRefreshTokenSchema = new mongoose.Schema(
  {
    refreshToken: {
      type: String,
    },
    participant: {
      type: mongoose.Types.ObjectId,
      ref: 'Participant',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  'ParticipantRefreshToken',
  participantRefreshTokenSchema
);
