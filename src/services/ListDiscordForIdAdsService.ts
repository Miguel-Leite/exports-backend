import prisma from "../prisma"


class ListDiscordForIdAdsService {
  async execute(id: string) {

    const ads = prisma.ad.findUnique({
      select: {
        discord: true
      },
      where: {
        id
      }
    });

    return ads;

  }
}

export { ListDiscordForIdAdsService };