import { Prisma, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient()

async function main() {

  await prisma.inventory.deleteMany();
  await prisma.$queryRaw(Prisma.sql`DELETE FROM sqlite_sequence WHERE NAME='Inventory';`);

  const totalProducts = parseInt(process.env.PRODUCTS_MIN_ITEMS || '100');

  const inventory = Array.from({ length: totalProducts }, (_, i) => ({
    productId: i + 1,
    quantity: faker.number.int({ min: 1, max: 100 }),
  }))

  await prisma.inventory.createMany({ data: inventory })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })