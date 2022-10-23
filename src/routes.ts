import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ListGamesController } from './controllers/ListGamesController';
import { ListAdsForIdGamesController } from './controllers/ListAdsForIdGamesController';
import { ListDiscordForIdAdsController } from './controllers/ListDiscordForIdAdsController';

export const router = Router();

router.get('/games', new ListGamesController().handle)
router.get('/games/:id/ads', new ListAdsForIdGamesController().handle)
router.get('/ads/:id/discord', new ListDiscordForIdAdsController().handle)