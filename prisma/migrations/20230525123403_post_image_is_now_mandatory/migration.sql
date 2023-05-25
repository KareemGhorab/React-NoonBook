/*
  Warnings:

  - Made the column `image` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "content" TEXT,
    "userId" INTEGER NOT NULL,
    "likesCounter" INTEGER NOT NULL,
    "commentsCounter" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "hashtags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("commentsCounter", "content", "createdAt", "hashtags", "id", "image", "likesCounter", "subtitle", "title", "userId") SELECT "commentsCounter", "content", "createdAt", "hashtags", "id", "image", "likesCounter", "subtitle", "title", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
