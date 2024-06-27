const express = require('express');
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
  getCMSAdmins,
  deleteCMSUsers,
  putCMSUsers,
  getOneCMSUsers,
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
  '/users/:id',
  authenticateUser,
  authorizeRoles('owner', 'organizer'),
  getOneCMSUsers
);

router.get(
  '/admins',
  authenticateUser,
  authorizeRoles('organizer'),
  getCMSAdmins
);
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

router.delete(
  '/users/:id',
  authenticateUser,
  authorizeRoles('owner', 'organizer'),
  deleteCMSUsers
);

router.put(
  '/users/:id',
  authenticateUser,
  authorizeRoles('owner', 'organizer'),
  putCMSUsers
);

// router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

module.exports = router;
