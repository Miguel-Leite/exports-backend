import { Request, Response } from "express";
import { ListAdsForIdGamesService } from "../services/ListAdsForIdGamesService";


class ListAdsForIdGamesController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const listAdsForIdGamesService = new ListAdsForIdGamesService();

    const result = await listAdsForIdGamesService.execute(id)

    return response.json(result)
  }

}

export { ListAdsForIdGamesController }