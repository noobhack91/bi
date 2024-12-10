import express from 'express';
import { getConsignees, updateConsigneeStatus, getConsigneeFiles } from '../controllers/consigneeController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getConsignees);
router.get('/:id/files/:type', getConsigneeFiles);
router.patch('/:id', authorize('admin', 'logistics'), updateConsigneeStatus);

export default router;