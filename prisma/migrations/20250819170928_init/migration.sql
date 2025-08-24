/*
  Warnings:

  - You are about to drop the column `access_token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `token_type` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `workspaces` table. All the data in the column will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `account_updated_at` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `workspaces` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `contents` DROP FOREIGN KEY `contents_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `session_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `workspaces` DROP FOREIGN KEY `workspaces_profileId_fkey`;

-- DropIndex
DROP INDEX `accounts_profileId_fkey` ON `accounts`;

-- DropIndex
DROP INDEX `contents_profileId_fkey` ON `contents`;

-- DropIndex
DROP INDEX `workspaces_profileId_fkey` ON `workspaces`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `access_token`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `expires_at`,
    DROP COLUMN `profileId`,
    DROP COLUMN `refresh_token`,
    DROP COLUMN `scope`,
    DROP COLUMN `token_type`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `account_access_token` VARCHAR(191) NULL,
    ADD COLUMN `account_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `account_expires_at` INTEGER NULL,
    ADD COLUMN `account_refresh_token` VARCHAR(191) NULL,
    ADD COLUMN `account_scope` VARCHAR(191) NULL,
    ADD COLUMN `account_token_type` VARCHAR(191) NULL,
    ADD COLUMN `account_updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `profile_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `contents` DROP COLUMN `profileId`,
    ADD COLUMN `profile_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workspaces` DROP COLUMN `profileId`,
    ADD COLUMN `profile_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `session`;

-- DropTable
DROP TABLE `verification`;

-- CreateTable
CREATE TABLE `profiles` (
    `profile_id` VARCHAR(191) NOT NULL,
    `profile_auth_username` TEXT NOT NULL,
    `profile_auth_mail` VARCHAR(191) NOT NULL,
    `profile_auth_mail_verified` BOOLEAN NOT NULL DEFAULT false,
    `profile_avatar_url` TEXT NULL,
    `profile_auth_birth_date` DATETIME(3) NOT NULL,
    `profile_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `profile_updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `profiles_profile_auth_mail_key`(`profile_auth_mail`),
    PRIMARY KEY (`profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `session_id` VARCHAR(191) NOT NULL,
    `session_expires_at` DATETIME(3) NOT NULL,
    `session_token` VARCHAR(191) NOT NULL,
    `session_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `session_updatedAt` DATETIME(3) NOT NULL,
    `session_ipAddress` TEXT NULL,
    `profile_agent` TEXT NULL,
    `profile_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sessions_session_token_key`(`session_token`),
    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verifications` (
    `verificaton_id` VARCHAR(191) NOT NULL,
    `verificiation_identifier` TEXT NOT NULL,
    `verification_value` TEXT NOT NULL,
    `verification_expiresAt` DATETIME(3) NOT NULL,
    `verification_createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `verification_updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`verificaton_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workspaces` ADD CONSTRAINT `workspaces_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE CASCADE ON UPDATE CASCADE;
