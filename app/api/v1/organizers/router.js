const express = require('express');
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
  getCMSAdmins,
  deleteCMSAdmins,
} = require('./controller');

const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.post(
  '/organizers',
  authenticateUser,
  authorizeRoles('owner'),
  createCMSOrganizer
);

// router.post("/users", createCMSUser);
router.post(
  '/users',
  authenticateUser,
  authorizeRoles('organizer'),
  createCMSUser
);

router.get(
  '/admins',
  authenticateUser,
  authorizeRoles('organizer'),
  getCMSAdmins
);
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

router.delete(
  '/admins/:id',
  authenticateUser,
  authorizeRoles('organizer'),
  deleteCMSAdmins
);

// router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

module.exports = router;
