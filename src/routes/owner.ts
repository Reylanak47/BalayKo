// src/routes/owner.ts
import { Router } from "express";
import { requireRole } from "../middleware/auth";
const router = Router();

router.get("/", requireRole("OWNER"), (_req, res) => {
  res.render("owner/dashboard");
});

export default router;
