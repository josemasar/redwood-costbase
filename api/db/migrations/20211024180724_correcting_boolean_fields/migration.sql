/*
  Warnings:

  - You are about to drop the column `finish` on the `Idea` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "finish",
ADD COLUMN     "finished" BOOLEAN DEFAULT false,
ALTER COLUMN "active" DROP NOT NULL;
