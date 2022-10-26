import prisma from "../prisma"
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";


class ListAdsForIdGamesService {

  async execute(gameId: string) {
    const games = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDay: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return games.map(ad => {
      return {
        ...ad,
        weekDay: ad.weekDay.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd)
      }
    });

  }
}

export { ListAdsForIdGamesService }