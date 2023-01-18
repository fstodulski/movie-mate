/*
  Warnings:

  - You are about to drop the column `movie_id` on the `WatchList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WatchList" DROP COLUMN "movie_id";

-- CreateTable
CREATE TABLE "MovieToWatchList" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "watchlist_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MovieToWatchList_pkey" PRIMARY KEY ("id")
);
