-- CreateTable
CREATE TABLE `products` (
    `ProductId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` VARCHAR(255) NULL,
    `ProductBrand` VARCHAR(255) NULL,
    `ProductQuantity` INTEGER NULL,
    `ProductPrice` INTEGER NULL,
    `ProductExpirydate` DATE NULL,
    `ProductImg` VARCHAR(255) NULL,
    `ShopName` VARCHAR(255) NULL,
    `UserEmail` VARCHAR(191) NULL,

    UNIQUE INDEX `ProductId_UNIQUE`(`ProductId`),
    PRIMARY KEY (`ProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `middlename` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileno` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdUser` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `referenceToken` VARCHAR(191) NOT NULL,
    `userType` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_referenceToken_key`(`referenceToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usercart` (
    `email` VARCHAR(255) NOT NULL,
    `totalItem` INTEGER NULL DEFAULT 0,
    `itemsid` VARCHAR(555) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beforebuying` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `usrcartobj` LONGTEXT NULL,
    `transactionid` VARCHAR(255) NULL,
    `transactionstatus` VARCHAR(45) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `beforebuying_transactionid_key`(`transactionid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
