import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma';
export async function adminSeeder() {
  const date = new Date('2002-12-24T06:22:33.444Z');
  const hashedPwd = await bcrypt.hash('password', 10);
  const admins = [

    {
      firstname: 'Elicom',
      lastname: 'Elijah',
      email: 'elijah@gmail.com',
      address: '0x3efcAA8E8AF17085Afd84d56944eBacD1FDC0688',
      phone: '+256781234567',
      dob: date,
      nin: 'CM97027102XXXX',
      role: 'admin',
      password: hashedPwd,
    },
    {
      firstname: 'Martin',
      lastname: 'Odegard',
      email: 'odegard@gmail.com',
      address: '0xcA148103AF13F34c290CcC22F7f426f2e3FD5DDD',
      phone: '+256787654321',
      dob: date,
      nin: 'CM97027102YYYY',
      role: 'admin',
      password: hashedPwd,
    },
  ];

  for (const admin of admins) {
    await prisma.user.upsert({
      where: { email: admin.email },
      update: {
        firstname: admin.firstname,
        lastname: admin.lastname,
        address: admin.address,
        phone: admin.phone,
        dob: admin.dob,
        nin: admin.nin,
        role: admin.role,
        password: admin.password,
      },
      create: admin,
    });
  }
}
adminSeeder()
  .then(() => console.log('✅ Admin Seeded successfully'))
  .catch((err) => {
    console.log('❌ Failed to seed admin=>', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
