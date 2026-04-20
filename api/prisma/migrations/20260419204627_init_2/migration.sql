-- AlterEnum
ALTER TYPE "InvestmentStatus" ADD VALUE 'PENDING';

-- AlterTable
ALTER TABLE "Investment" ALTER COLUMN "expectedProfit" DROP NOT NULL;
