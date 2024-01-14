/*
  Warnings:

  - The primary key for the `Comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `commentId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `Comments` table. All the data in the column will be lost.
  - The primary key for the `TextPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `originalAuthorId` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `publickAnnounce` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `publickName` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `publickText` on the `TextPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TextPost` table. All the data in the column will be lost.
  - The primary key for the `VideoPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `originalAuthorId` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `publickName` on the `VideoPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `VideoPost` table. All the data in the column will be lost.
  - The primary key for the `linkPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `linkPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `linkPost` table. All the data in the column will be lost.
  - You are about to drop the column `originalAuthorId` on the `linkPost` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `linkPost` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `linkPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `linkPost` table. All the data in the column will be lost.
  - The primary key for the `photoPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `photoPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `photoPost` table. All the data in the column will be lost.
  - You are about to drop the column `originalAuthorId` on the `photoPost` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `photoPost` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `photoPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `photoPost` table. All the data in the column will be lost.
  - The primary key for the `quotePost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `originalAuthorId` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `publickText` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `quoteAuthor` on the `quotePost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `quotePost` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - The required column `comment_id` was added to the `Comments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `post_id` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `TextPost` table without a default value. This is not possible if the table is not empty.
  - The required column `post_id` was added to the `TextPost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `publick_announce` to the `TextPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publick_name` to the `TextPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publick_text` to the `TextPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `TextPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `VideoPost` table without a default value. This is not possible if the table is not empty.
  - The required column `post_id` was added to the `VideoPost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `publick_name` to the `VideoPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `VideoPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `linkPost` table without a default value. This is not possible if the table is not empty.
  - The required column `post_id` was added to the `linkPost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updated_at` to the `linkPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `photoPost` table without a default value. This is not possible if the table is not empty.
  - The required column `post_id` was added to the `photoPost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updated_at` to the `photoPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `quotePost` table without a default value. This is not possible if the table is not empty.
  - The required column `post_id` was added to the `quotePost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `publick_text` to the `quotePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quote_author` to the `quotePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `quotePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_pkey",
DROP COLUMN "authorId",
DROP COLUMN "commentId",
DROP COLUMN "createdAt",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "comment_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD CONSTRAINT "Comments_pkey" PRIMARY KEY ("comment_id");

-- AlterTable
ALTER TABLE "TextPost" DROP CONSTRAINT "TextPost_pkey",
DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "originalAuthorId",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
DROP COLUMN "publickAnnounce",
DROP COLUMN "publickName",
DROP COLUMN "publickText",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "publick_announce" TEXT NOT NULL,
ADD COLUMN     "publick_name" TEXT NOT NULL,
ADD COLUMN     "publick_text" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "TextPost_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "VideoPost" DROP CONSTRAINT "VideoPost_pkey",
DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "originalAuthorId",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
DROP COLUMN "publickName",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "publick_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "VideoPost_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "linkPost" DROP CONSTRAINT "linkPost_pkey",
DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "originalAuthorId",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "linkPost_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "photoPost" DROP CONSTRAINT "photoPost_pkey",
DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "originalAuthorId",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "photoPost_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "quotePost" DROP CONSTRAINT "quotePost_pkey",
DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "originalAuthorId",
DROP COLUMN "postId",
DROP COLUMN "postStatus",
DROP COLUMN "publickText",
DROP COLUMN "quoteAuthor",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_author_id" TEXT,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "publick_text" TEXT NOT NULL,
ADD COLUMN     "quote_author" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "quotePost_pkey" PRIMARY KEY ("post_id");
