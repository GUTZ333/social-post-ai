/*
  Warnings:

  - You are about to drop the column `profile_createdAt` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `profile_updatedAt` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `session_createdAt` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `session_ipAddress` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `session_updatedAt` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `verification_createdAt` on the `verifications` table. All the data in the column will be lost.
  - You are about to drop the column `verification_updatedAt` on the `verifications` table. All the data in the column will be lost.
  - Added the required column `profile_updated_at` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_updated_at` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `profile_createdAt`,
    DROP COLUMN `profile_updatedAt`,
    ADD COLUMN `profile_create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `profile_updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `sessions` DROP COLUMN `session_createdAt`,
    DROP COLUMN `session_ipAddress`,
    DROP COLUMN `session_updatedAt`,
    ADD COLUMN `session_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `session_ip_address` TEXT NULL,
    ADD COLUMN `session_updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `verifications` DROP COLUMN `verification_createdAt`,
    DROP COLUMN `verification_updatedAt`,
    ADD COLUMN `verification_created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `verification_updated_at` DATETIME(3) NULL;
