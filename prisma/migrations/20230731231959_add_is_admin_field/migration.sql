/*
  Warnings:

  - Added the required column `isAdminn` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdminn" BOOLEAN NOT NULL
);
INSERT INTO "new_Users" ("id", "name", "password") SELECT "id", "name", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_name_key" ON "Users"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
