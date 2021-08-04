-- CreateTable
CREATE TABLE "StaticContent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "whatsApp" TEXT,
    "telegram" TEXT,
    "email" TEXT,
    "github" TEXT,
    "aboutMe" TEXT,
    "cv" TEXT,
    "projectsCompleted" INTEGER NOT NULL,
    "cupsOfCoffee" INTEGER NOT NULL,
    "satisfiedClients" INTEGER NOT NULL,
    "yearsOld" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staticContentId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    FOREIGN KEY ("staticContentId") REFERENCES "StaticContent" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProgressBars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ProgressPercentage" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
