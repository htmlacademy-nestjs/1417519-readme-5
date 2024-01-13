-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "VideoPost" (
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "originalAuthorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publickName" TEXT NOT NULL,
    "tags" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "VideoPost_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "TextPost" (
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "originalAuthorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publickName" TEXT NOT NULL,
    "publickAnnounce" TEXT NOT NULL,
    "publickText" TEXT NOT NULL,
    "tags" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "TextPost_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "quotePost" (
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "originalAuthorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publickText" TEXT NOT NULL,
    "quoteAuthor" TEXT NOT NULL,
    "tags" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "quotePost_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "photoPost" (
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "originalAuthorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "tags" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "photoPost_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "linkPost" (
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "originalAuthorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "link" TEXT NOT NULL,
    "tags" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "linkPost_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "Comments" (
    "commentId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("commentId")
);
