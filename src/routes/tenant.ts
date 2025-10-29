// src/routes/tenant.ts
import { Router } from "express";
import { requireRole } from "../middleware/auth";
const router = Router();

router.get("/", requireRole("TENANT"), (_req, res) => {
  res.render("tenant/dashboard");
});

export default router;
