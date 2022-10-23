import { Request, Response } from "express";
import { ShowDiscordForIdAdsService } from "../services/ShowDiscordForIdAdsService";


class ShowDiscordForIdAdsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listDiscordForIdAdsService = new ShowDiscordForIdAdsService();

    const result = await listDiscordForIdAdsService.execute(id);

    response.json({
      discord: result?.discord
    })
  }
}

export { ShowDiscordForIdAdsController }