/*
  Warnings:

  - You are about to drop the `MovieProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `movie_provider_id` on the `MovieToProvider` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `MovieToProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_url` to the `MovieToProvider` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MovieProvider_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MovieProvider";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MovieToProvider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "movie_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "provider_url" TEXT NOT NULL
);
INSERT INTO "new_MovieToProvider" ("id", "movie_id") SELECT "id", "movie_id" FROM "MovieToProvider";
DROP TABLE "MovieToProvider";
ALTER TABLE "new_MovieToProvider" RENAME TO "MovieToProvider";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
