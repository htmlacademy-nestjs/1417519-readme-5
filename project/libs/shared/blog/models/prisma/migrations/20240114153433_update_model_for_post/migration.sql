/*
  Warnings:

  - You are about to drop the column `publick_text` on the `quote_post` table. All the data in the column will be lost.
  - You are about to drop the column `publick_announce` on the `text_post` table. All the data in the column will be lost.
  - You are about to drop the column `publick_name` on the `text_post` table. All the data in the column will be lost.
  - You are about to drop the column `publick_text` on the `text_post` table. All the data in the column will be lost.
  - You are about to drop the column `publick_name` on the `video_post` table. All the data in the column will be lost.
  - Added the required column `public_text` to the `quote_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_announce` to the `text_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_name` to the `text_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_text` to the `text_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_name` to the `video_post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quote_post" DROP COLUMN "publick_text",
ADD COLUMN     "public_text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "text_post" DROP COLUMN "publick_announce",
DROP COLUMN "publick_name",
DROP COLUMN "publick_text",
ADD COLUMN     "public_announce" TEXT NOT NULL,
ADD COLUMN     "public_name" TEXT NOT NULL,
ADD COLUMN     "public_text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "video_post" DROP COLUMN "publick_name",
ADD COLUMN     "public_name" TEXT NOT NULL;
