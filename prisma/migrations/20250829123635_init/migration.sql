/*
  Warnings:

  - You are about to drop the column `account_expires_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `account_token_type` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider_id,profile_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_pass` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `accounts_provider_id_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `account_expires_at`,
    DROP COLUMN `account_token_type`,
    ADD COLUMN `account_access_token_expires_at` DATETIME(3) NULL,
    ADD COLUMN `account_pass` VARCHAR(191) NOT NULL,
    ADD COLUMN `account_refresh_token_expires_at` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `accounts_provider_id_profile_id_key` ON `accounts`(`provider_id`, `profile_id`);
