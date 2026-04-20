/*
  Warnings:

  - You are about to drop the column `durationDays` on the `InvestmentPlan` table. All the data in the column will be lost.
  - Added the required column `duration` to the `InvestmentPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Investment" ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "InvestmentPlan" DROP COLUMN "durationDays",
ADD COLUMN     "duration" INTEGER NOT NULL,
ALTER COLUMN "maxAmount" DROP NOT NULL,
ALTER COLUMN "payoutType" SET DEFAULT 'MONTHLY',
ALTER COLUMN "returnType" SET DEFAULT 'FIXED';
