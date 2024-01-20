/*
  Warnings:

  - You are about to drop the `link_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photo_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quote_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `text_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('VIDEO', 'TEXT', 'QUOTE', 'PHOTO', 'LINK');

-- DropTable
DROP TABLE "link_post";

-- DropTable
DROP TABLE "photo_post";

-- DropTable
DROP TABLE "quote_post";

-- DropTable
DROP TABLE "text_post";

-- DropTable
DROP TABLE "video_post";

-- CreateTable
CREATE TABLE "post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "post_status" "PostStatus" NOT NULL DEFAULT 'PUBLISHED',
    "tags" TEXT,
    "postType" "PostType" NOT NULL DEFAULT 'TEXT',
    "public_name" TEXT NOT NULL,
    "public_announce" TEXT NOT NULL,
    "public_text" TEXT NOT NULL,
    "quote_author" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("post_id")
);
