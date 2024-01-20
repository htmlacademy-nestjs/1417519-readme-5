/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TextPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VideoPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `linkPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photoPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quotePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "TextPost";

-- DropTable
DROP TABLE "VideoPost";

-- DropTable
DROP TABLE "linkPost";

-- DropTable
DROP TABLE "photoPost";

-- DropTable
DROP TABLE "quotePost";

-- CreateTable
CREATE TABLE "video_post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "publick_name" TEXT NOT NULL,
    "tags" TEXT,
    "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "video_post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "text_post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "publick_name" TEXT NOT NULL,
    "publick_announce" TEXT NOT NULL,
    "publick_text" TEXT NOT NULL,
    "tags" TEXT,
    "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "text_post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "quote_post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "publick_text" TEXT NOT NULL,
    "quote_author" TEXT NOT NULL,
    "tags" TEXT,
    "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "quote_post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "photo_post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "tags" TEXT,
    "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "photo_post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "link_post" (
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "link" TEXT NOT NULL,
    "tags" TEXT,
    "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "link_post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);
