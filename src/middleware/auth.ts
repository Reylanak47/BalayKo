// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";

export type Role = "ADMIN" | "OWNER" | "TENANT";

// TEMP: mock a logged-in user to preview role UIs (change role in app.ts)
export function mockUser(role: Role = "TENANT") {
  return (req: Request, res: Response, next: NextFunction) => {
    (req as any).user = { id: 1, email: `${role.toLowerCase()}@balayko.app`, role };
    res.locals.user = (req as any).user; // expose to EJS
    next();
  };
}

export function requireRole(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !roles.includes(user.role)) return res.status(403).send("Forbidden");
    next();
  };
}
