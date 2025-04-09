import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getEventsByOrganiser(userId: number) {
  return prisma.event.findMany({
    where: {
      organiserId: userId
    }

  });
}


function getEventsIsInvited(userId: number) {
  return prisma.eventInvite.findMany({
    where: {
      userId: userId
    },
    include: {
      event: true
    }
  }).then(invites => invites.map(invite => invite.event));
}

function main() {
  const userId = 1;

  console.log('events organised by user:');
  return getEventsByOrganiser(userId)
    .then(organizedEvents => {
      console.log(JSON.stringify(organizedEvents, null, 2));

      console.log('user is invited at:');
      return getEventsIsInvited(userId);
    })
    .then(invitedEvents => {
      console.log(JSON.stringify(invitedEvents, null, 2));

      return prisma.$disconnect();
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });