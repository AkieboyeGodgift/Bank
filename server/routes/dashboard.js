import express from 'express';
import { verifyToken, checkRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/user', verifyToken, checkRole('user'), (req, res) => {
  res.json({ message: 'Welcome to the user dashboard' });
});

router.get('/admin', verifyToken, checkRole('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

export default router;
