-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "ideaId" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "finished" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "Idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
