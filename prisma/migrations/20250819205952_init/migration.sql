/*
  Warnings:

  - You are about to drop the column `profile_create_at` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `profile_create_at`,
    ADD COLUMN `profile_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
