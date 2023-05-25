/*
  Warnings:

  - You are about to drop the column `comments_counter` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likes_counter` on the `Post` table. All the data in the column will be lost.
  - Added the required column `commentsCounter` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likesCounter` to the `Post` table without a default value. This is not possible if the table is not empty.

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
    "image" TEXT,
    "hashtags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("content", "createdAt", "hashtags", "id", "image", "subtitle", "title", "userId") SELECT "content", "createdAt", "hashtags", "id", "image", "subtitle", "title", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
