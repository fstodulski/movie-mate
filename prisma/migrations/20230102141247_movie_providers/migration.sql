-- CreateTable
CREATE TABLE "MovieProvider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "movieId" INTEGER NOT NULL,
    "providerImg" TEXT NOT NULL,
    "providerUrl" TEXT NOT NULL
);
