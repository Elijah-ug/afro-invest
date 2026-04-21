import { RiskLevel } from '../generated/enums';
import { prisma } from '../lib/prisma';
export async function plansSeeder() {
  const plans = [
    {
      name: 'Starter Plan',
      description: 'Perfect for beginners looking to start their investment journey with confidence',
      minAmount: 10,
      maxAmount: 99,
      returnRate: 2,
      duration: 90,
      riskLevel: RiskLevel.LOW,
    },
    {
      name: 'Growth Plan',
      description: 'Balanced approach for steady wealth accumulation with compounding returns',
      minAmount: 100,
      maxAmount: 499,
      returnRate: 3.5,
      duration: 60,
      riskLevel: RiskLevel.MEDIUM,
    },
    {
      name: 'Accelerator Plan',
      description: 'High-growth option for experienced investors seeking premium returns',
      minAmount: 100,
      maxAmount: 1000,
      returnRate: 9,
      duration: 30,
      riskLevel: RiskLevel.HIGH,
    },
  ];

  for (const plan of plans) {
    await prisma.investmentPlan.upsert({
      where: { name: plan.name },
      update: {
        description: plan.description,
        minAmount: plan.minAmount,
        maxAmount: plan.maxAmount,
        returnRate: plan.returnRate,
        duration: plan.duration,
        riskLevel: plan.riskLevel,
      },
      create: plan,
    });
  }
}
plansSeeder()
  .then(() => console.log('✅ plan Seeded successfully'))
  .catch((err) => {
    console.log('❌ Failed to seed plan=>', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
