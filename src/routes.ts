import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ListGamesController } from './controllers/ListGamesController';
import { ListAdsForIdGamesController } from './controllers/ListAdsForIdGamesController';

export const router = Router();

router.get('/games', new ListGamesController().handle)
router.get('/games/:id/ads', new ListAdsForIdGamesController().handle)