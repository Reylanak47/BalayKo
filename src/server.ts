// src/server.ts
import app from "./app";
const port = Number(process.env.PORT) || 5465;
app.listen(port, () => {
  console.log(`BalayKo server running on http://localhost:${port}`);
});
