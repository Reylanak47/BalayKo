// src/routes/admin.ts
import { Router } from "express";
import { requireRole } from "../middleware/auth";
const router = Router();

router.get("/", requireRole("ADMIN"), (_req, res) => {
  res.render("admin/dashboard");
});

export default router;
