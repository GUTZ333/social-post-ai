/*
  Warnings:

  - A unique constraint covering the columns `[profile_auth_mail]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `profiles` MODIFY `profile_auth_pass` TEXT NULL;

-- CreateTable
CREATE TABLE `accounts` (
    `account_id` VARCHAR(191) NOT NULL,
    `profile_id` VARCHAR(191) NOT NULL,
    `provider` ENUM('Google', 'InstaGram', 'credentials') NOT NULL,
    `provider_account_id` VARCHAR(191) NOT NULL,
    `access_token` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `accounts_provider_provider_account_id_key`(`provider`, `provider_account_id`),
    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `profiles_profile_auth_mail_key` ON `profiles`(`profile_auth_mail`);

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
