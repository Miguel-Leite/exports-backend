import { Request, Response } from "express";
import { IAdsCreateRequest } from "../interfaces/IAdsCreateRequest";
import { CreateAdsService } from "../services/CreateAdsService";
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";




class CreateAdsController {

  async handle(request: Request, response: Response) {

    const gameId: string = request.params.id

    const {
      name,
      yearsPlaying,
      discord,
      weekDay,
      hourStart,
      hourEnd,
      useVoiceChannel
    }: IAdsCreateRequest = request.body;

    const service = new CreateAdsService();

    const ads = await service.execute({
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDay: weekDay.join(','),
      hourStart: convertHourStringToMinutes(hourStart),
      hourEnd: convertHourStringToMinutes(hourEnd),
      useVoiceChannel: useVoiceChannel
    })

    return response.json(ads)

  }
}

export { CreateAdsController }