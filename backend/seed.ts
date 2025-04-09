import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {


    const event3 = await prisma.event.create({
        data: {
            name: 'event3',
            date: new Date('2025-11-10'),
            organiserId: 1
        }
    })

    const event4 = await prisma.event.create({
        data: {
            name: 'event3',
            date: new Date('2026-01-04'),
            organiserId: 2
        }
    })

    const event5 = await prisma.event.create({
        data: {
            name: 'event5',
            date: new Date('2026-05-10'),
            organiserId: 4
        }
    })

    console.log(`events added`)


    const invite1 = await prisma.eventInvite.create({
        data: {
            userId: 2,
            eventId: event3.id
        }
    })
    const invite2 = await prisma.eventInvite.create({
        data: {
            userId: 3,
            eventId: event3.id
        }
    })
    const invite3 = await prisma.eventInvite.create({
        data: {
            userId: 4,
            eventId: event3.id
        }
    })

    console.log(`invites added`)


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