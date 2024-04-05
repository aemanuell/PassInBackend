import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '593b0754-72cd-4849-a654-022c9cac3259',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}
seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})