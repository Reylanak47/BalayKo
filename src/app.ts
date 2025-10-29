// src/app.ts
import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { mockUser } from "./middleware/auth";
import indexRouter from "./routes/index";
import listingsRouter from "./routes/listings";
import adminRouter from "./routes/admin";
import ownerRouter from "./routes/owner";
import tenantRouter from "./routes/tenant";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

// ▼ Change the role here to preview that UI: "TENANT" | "OWNER" | "ADMIN"
app.use(mockUser("TENANT"));

app.use("/", indexRouter);
app.use("/listings", listingsRouter);
app.use("/admin", adminRouter);
app.use("/owner", ownerRouter);
app.use("/tenant", tenantRouter);

app.use((req, res) => res.status(404).render("not-found"));
export default app;
