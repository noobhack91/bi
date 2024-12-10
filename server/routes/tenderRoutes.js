import express from 'express';
import {
  searchTenders,
  getTenderById,
  getDistricts,
  getBlocks
} from '../controllers/tenderController.js';

const router = express.Router();

router.get('/search', searchTenders);
router.get('/districts', getDistricts);
router.get('/blocks', getBlocks);
router.get('/:id', getTenderById);

export default router;