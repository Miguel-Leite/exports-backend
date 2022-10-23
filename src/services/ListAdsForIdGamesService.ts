import prisma from "../prisma"


class ListAdsForIdGamesService {

  async execute(idGame: string) {
    const games = await prisma.ad.findMany({
      where: {
        gameId: idGame
      }
    });

    return games;

  }
}

export { ListAdsForIdGamesService }