# Flintcore EDU - 全栈开发环境

这个项目现在包含了前端和后端两部分：

## 项目结构

```
flintcore-edu/
├── app/                     # React Router v7 前端应用
│   ├── components/          # 前端组件
│   ├── routes/             # 页面路由
│   └── ...
├── backend/                # Bun + Hono 后端API
│   ├── src/
│   │   ├── routes/         # API路由
│   │   └── index.ts        # 服务器入口
│   └── package.json
├── package.json            # 根项目配置
└── vite.config.ts          # 前端构建配置（含代理）
```

## 开发环境

### 前提条件

- 安装 Bun (推荐最新版本)
- Node.js 18+ (用于前端构建)

### 启动开发环境

1. **安装依赖**

   ```bash
   # 安装根目录依赖
   bun install

   # 安装后端依赖
   cd backend && bun install && cd ..
   ```

2. **启动开发服务器**

   ```bash
   # 同时启动前端和后端开发服务器
   bun dev
   ```

   或者分别启动：

   ```bash
   # 启动前端 (端口: 5173)
   bun frontend:dev

   # 启动后端 (端口: 3001)
   bun backend:dev
   ```

3. **访问应用**
   - 前端: http://localhost:5173
   - 后端API: http://localhost:3001
   - API健康检查: http://localhost:3001/health

## 生产环境

```bash
# 构建并启动生产环境
bun build
bun start
```

## API 接口

后端提供以下API接口（均可通过前端 `/api/*` 访问）：

### 用户相关

- `GET /api/users` - 获取用户列表
- `GET /api/users/:id` - 获取单个用户
- `POST /api/users` - 创建用户

### 课程相关

- `GET /api/courses` - 获取课程列表
- `GET /api/courses/:id` - 获取单个课程
- `POST /api/courses` - 创建课程

### 认证相关

- `POST /api/auth/login` - 用户登录

### 统计数据

- `GET /api/stats` - 获取系统统计

## 技术栈

### 前端

- React 19
- React Router v7
- Ant Design 5
- Vite 6
- TypeScript

### 后端

- Bun runtime
- Hono web framework
- TypeScript

## 功能特性

- ✅ **热重载 (HMR)**: 前端和后端都支持热重载
- ✅ **代理配置**: 前端通过Vite代理访问后端API
- ✅ **类型安全**: 全栈TypeScript支持
- ✅ **并发启动**: 一个命令同时启动前后端
- ✅ **CORS配置**: 支持跨域请求
- ✅ **错误处理**: 统一的错误处理机制
- ✅ **日志记录**: 请求日志和错误日志

## 开发工具

项目使用Bun作为主要的包管理器和运行时，提供：

- 更快的依赖安装
- 内置的TypeScript支持
- 优秀的性能表现
