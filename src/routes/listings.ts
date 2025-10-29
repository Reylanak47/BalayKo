// src/routes/listings.ts
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_req, res) => {
  const listings = await prisma.listing.findMany({ include: { owner: true } });
  res.render("listings", { listings });
});

export default router;
