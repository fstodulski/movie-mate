/*
  Warnings:

  - You are about to drop the column `user_id` on the `WatchList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WatchList" DROP COLUMN "user_id",
ALTER COLUMN "userId" DROP DEFAULT;
