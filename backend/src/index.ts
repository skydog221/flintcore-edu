import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

// 导入路由
import { apiRoutes } from "./routes/api";

const app = new Hono();

// 中间件
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

// API路由
app.route("/api", apiRoutes);

// 健康检查
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || "development",
  });
});

// 404处理
app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});

// 错误处理
app.onError((err, c) => {
  console.error("Server error:", err);
  return c.json(
    {
      error: "Internal Server Error",
      message: process.env.NODE_ENV === "development" ? err.message : undefined,
    },
    500
  );
});

const port = parseInt(process.env.PORT || "3001");

console.log(`🚀 Backend server starting on port ${port}`);

// 使用 Bun 原生服务器
Bun.serve({
  port,
  fetch: app.fetch,
});

console.log(`✅ Backend server running at http://localhost:${port}`);

export default app;
