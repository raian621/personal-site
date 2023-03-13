-- CreateTable
CREATE TABLE "ProjectPost" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "description" VARCHAR(512) NOT NULL,
    "sourceURL" TEXT,
    "mardownPath" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,

    CONSTRAINT "ProjectPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectPost_title_key" ON "ProjectPost"("title");
