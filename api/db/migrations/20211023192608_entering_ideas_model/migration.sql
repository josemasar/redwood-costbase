-- CreateTable
CREATE TABLE "Idea" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "finish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
