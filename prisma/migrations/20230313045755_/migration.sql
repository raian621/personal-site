/*
  Warnings:

  - You are about to drop the column `mardownPath` on the `ProjectPost` table. All the data in the column will be lost.
  - Added the required column `markdownPath` to the `ProjectPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectPost" DROP COLUMN "mardownPath",
ADD COLUMN     "markdownPath" TEXT NOT NULL;
