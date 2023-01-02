/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ChatHistory` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedAt` on the `ChatHistory` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ChatHistory` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `movieId` on the `MovieProvider` table. All the data in the column will be lost.
  - You are about to drop the column `providerImg` on the `MovieProvider` table. All the data in the column will be lost.
  - You are about to drop the column `providerUrl` on the `MovieProvider` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `ChatHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modified_at` to the `ChatHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ChatHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modified_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_img` to the `MovieProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_url` to the `MovieProvider` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original_title" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "tmdb_id" INTEGER NOT NULL,
    "imdb_id" TEXT NOT NULL,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MovieToProvider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "movie_id" TEXT NOT NULL,
    "movie_provider_id" TEXT NOT NULL,
    CONSTRAINT "MovieToProvider_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovieToProvider_movie_provider_id_fkey" FOREIGN KEY ("movie_provider_id") REFERENCES "MovieProvider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ChatHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "modified_at" DATETIME NOT NULL,
    CONSTRAINT "ChatHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ChatHistory" ("content", "id") SELECT "content", "id" FROM "ChatHistory";
DROP TABLE "ChatHistory";
ALTER TABLE "new_ChatHistory" RENAME TO "ChatHistory";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "modified_at" DATETIME NOT NULL
);
INSERT INTO "new_User" ("email", "id") SELECT "email", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_MovieProvider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "provider_img" TEXT NOT NULL,
    "provider_url" TEXT NOT NULL
);
INSERT INTO "new_MovieProvider" ("id") SELECT "id" FROM "MovieProvider";
DROP TABLE "MovieProvider";
ALTER TABLE "new_MovieProvider" RENAME TO "MovieProvider";
CREATE UNIQUE INDEX "MovieProvider_name_key" ON "MovieProvider"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdb_id_key" ON "Movie"("tmdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdb_id_key" ON "Movie"("imdb_id");
