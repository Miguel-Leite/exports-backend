import prisma from "../prisma"


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

    return games;

  }
}

export { ListAdsForIdGamesService }