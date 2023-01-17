/*
  Warnings:

  - You are about to drop the column `move_id` on the `WatchList` table. All the data in the column will be lost.
  - Added the required column `movie_id` to the `WatchList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchList" DROP COLUMN "move_id",
ADD COLUMN     "movie_id" TEXT NOT NULL;
