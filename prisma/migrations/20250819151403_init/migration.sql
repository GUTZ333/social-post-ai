/*
  Warnings:

  - You are about to drop the column `userId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `workspaces` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `profileId` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `workspaces` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `contents` DROP FOREIGN KEY `contents_userId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `session_userId_fkey`;

-- DropForeignKey
ALTER TABLE `workspaces` DROP FOREIGN KEY `workspaces_userId_fkey`;

-- DropIndex
DROP INDEX `accounts_userId_fkey` ON `accounts`;

-- DropIndex
DROP INDEX `contents_userId_fkey` ON `contents`;

-- DropIndex
DROP INDEX `session_userId_fkey` ON `session`;

-- DropIndex
DROP INDEX `workspaces_userId_fkey` ON `workspaces`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `userId`,
    ADD COLUMN `profileId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `contents` DROP COLUMN `userId`,
    ADD COLUMN `profileId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `userAgent`,
    DROP COLUMN `userId`,
    ADD COLUMN `profileAgent` TEXT NULL,
    ADD COLUMN `profileId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workspaces` DROP COLUMN `userId`,
    ADD COLUMN `profileId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `profile` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `image` TEXT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `profile_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workspaces` ADD CONSTRAINT `workspaces_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
