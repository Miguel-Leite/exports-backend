import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ListGamesController } from './controllers/ListGamesController';

export const router = Router();

router.get('/games', new ListGamesController().handle)