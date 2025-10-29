# BalayKo — Scaffold v2 (Role-based UI)

Express + EJS + Prisma + MySQL with Admin/Owner/Tenant view folders and a mock role middleware for quick preview.

## Quick start
1) Ensure MySQL is running. Create DB:
```sql
CREATE DATABASE IF NOT EXISTS balayko_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
2) Install deps:
```
npm install
```
3) Generate client & migrate:
```
npx prisma generate
npm run prisma:migrate
```
4) Seed sample data:
```
npm run seed
```
5) Run dev server:
```
npm run dev
```
Open:
- http://localhost:5465
- http://localhost:5465/listings
- http://localhost:5465/admin (change role in src/app.ts to ADMIN to preview)
- http://localhost:5465/owner  (change role to OWNER)
- http://localhost:5465/tenant (TENANT)

### Change preview role
Edit **src/app.ts**:
```ts
app.use(mockUser("TENANT")); // or "OWNER" or "ADMIN"
```

### Environment
Update `.env` if your MySQL has a password:
```
DATABASE_URL="mysql://root:YOURPASS@localhost:3306/balayko_db"
```

### Next steps
Swap mockUser for real auth (sessions/JWT), add Owner CRUD+uploads, maps, messaging, payments.
