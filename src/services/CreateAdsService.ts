import { IAdsCreate } from "../interfaces/IAdsCreateInput";
import prisma from "../prisma"



class CreateAdsService {

  async execute({ gameId, name, yearsPlaying, discord, weekDay, hourStart, hourEnd, useVoiceChannel }: IAdsCreate) {

    const verifyExistsGame = await prisma.game.findFirst({
      where: {
      id: gameId        
      }
    });


    if (!verifyExistsGame) {
      return {
        "error": "Game not found."
      };
    }

    const ads = await prisma.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDay,
        hourStart,
        hourEnd,
        useVoiceChannel
      }
    })

    console.log
  
    return ads;


  }
}

export { CreateAdsService }