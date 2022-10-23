import { Request, Response } from "express";
import { ListDiscordForIdAdsService } from "../services/ListDiscordForIdAdsService";


class ListDiscordForIdAdsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listDiscordForIdAdsService = new ListDiscordForIdAdsService();

    const result = await listDiscordForIdAdsService.execute(id);

    response.json({
      discord: result?.discord
    })
  }
}

export { ListDiscordForIdAdsController }