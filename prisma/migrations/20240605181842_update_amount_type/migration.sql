/*
  Warnings:

  - You are about to alter the column `amount` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `image` on the `photo` table. All the data in the column will be lost.
  - Added the required column `prodImg` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `amount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `photo` DROP COLUMN `image`,
    ADD COLUMN `prodImg` VARCHAR(191) NOT NULL;
