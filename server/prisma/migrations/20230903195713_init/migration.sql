-- CreateTable
CREATE TABLE `Dishes` (
    `id` VARCHAR(191) NOT NULL,
    `dish_name` VARCHAR(191) NOT NULL,
    `dish_category` VARCHAR(191) NOT NULL,
    `dish_prices` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dishes_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
