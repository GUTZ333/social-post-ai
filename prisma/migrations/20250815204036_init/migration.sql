-- CreateTable
CREATE TABLE `profiles` (
    `profile_id` VARCHAR(191) NOT NULL,
    `profile_auth_username` VARCHAR(191) NOT NULL,
    `profile_auth_mail` VARCHAR(191) NOT NULL,
    `profile_auth_pass` TEXT NOT NULL,
    `profile_birth_date` DATE NOT NULL,
    `profile_avatar_url` VARCHAR(191) NULL,
    `profile_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `profile_updated_at` DATETIME(3) NOT NULL,
    `profile_provider` ENUM('Google', 'InstaGram', 'credentials') NOT NULL,

    PRIMARY KEY (`profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workspaces` (
    `workspace_id` VARCHAR(191) NOT NULL,
    `workspace_name` VARCHAR(191) NOT NULL,
    `workspace_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `workspace_updated_at` DATETIME(3) NOT NULL,
    `profile_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`workspace_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contents` (
    `content_id` VARCHAR(191) NOT NULL,
    `content_prompt` VARCHAR(191) NOT NULL,
    `content_text` VARCHAR(191) NULL,
    `content_image` VARCHAR(191) NULL,
    `content_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content_updated_at` DATETIME(3) NOT NULL,
    `profile_id` VARCHAR(191) NOT NULL,
    `workspace_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`content_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `workspaces` ADD CONSTRAINT `workspaces_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`profile_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_workspace_id_fkey` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces`(`workspace_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
