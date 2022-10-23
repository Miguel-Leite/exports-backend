import { Request, Response } from "express";

import { ListGamesService } from '../services/ListGamesService';

class ListGamesController {

    async handle(request: Request, response: Response){
        const gamesService = new ListGamesService();

        const result = await gamesService.execute();

        return response.json(result)
    }

}

export { ListGamesController }