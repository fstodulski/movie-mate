-- AlterTable
ALTER TABLE "WatchList" ADD COLUMN     "userId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
