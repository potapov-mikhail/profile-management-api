// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Создание пользователей
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      role: 'ADMIN',
      status: 'active',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      role: 'USER',
      status: 'inactive',
    },
  });

  // Создание групп
  const group1 = await prisma.group.create({
    data: {
      name: 'Group 1',
      description: 'This is the first group',
      ownerId: user1.id,
    },
  });

  const group2 = await prisma.group.create({
    data: {
      name: 'Group 2',
      description: 'This is the second group',
      ownerId: user2.id,
    },
  });

  // Создание профилей
  await prisma.profile.create({
    data: {
      name: 'Profile 1',
      groupId: group1.id,
    },
  });

  await prisma.profile.create({
    data: {
      name: 'Profile 2',
      groupId: group2.id,
    },
  });

  console.log('Database seeded successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
