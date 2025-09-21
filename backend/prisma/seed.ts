import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // 原有轮播图数据
  const carouselData = [
    {
      id: 1,
      url: "https://tc.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250905/ge3Z/294X165/cropped-image.png/webp",
    },
    {
      id: 2,
      url: "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250905/UaRO/279X157/cropped-image_%281%29.png/webp",
    },
    {
      id: 3,
      url: "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250905/C5s3/270X152/cropped-image_%282%29.png/webp",
    },
    {
      id: 4,
      url: "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250905/VvCW/268X151/cropped-image_%283%29.png/webp",
    },
  ];

  // 创建或更新 SiteConfig 数据
  await prisma.siteConfig.upsert({
    where: { id: 1 },
    update: { carousel: carouselData },
    create: { carousel: carouselData },
  });

  // 清理现有数据（可选）
  await prisma.article.deleteMany();
  await prisma.userInfo.deleteMany();

  // 创建用户数据
  const defaultUser = await prisma.userInfo.create({
    data: {
      username: "多bug的啸天犬",
      email: "admin@example.com",
      password: "$2b$10$exampleHashedPassword", // 实际应用中应该使用真实的哈希密码
      articles: [],
      flowers: [],
      follows: [],
      role: ["admin", "user"],
      avatar: "",
    },
  });

  // 从 api.ts 中移动的 mockArticles 数据，适配到 Article 模型
  const mockArticles = [
    {
      uuid: "f164459b-8e5e-442f-8cba-e94b95417872",
      title: "React 入门教程",
      description: "这是一个关于 React 基础知识的教程，适合初学者学习。",
      content: "React 入门教程内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "13df2190-b16d-49e0-ae11-72dee774c713",
      title: "TypeScript 高级技巧",
      description: "本文介绍了一些 TypeScript 的高级使用技巧和最佳实践。",
      content: "TypeScript 高级技巧内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "accfa887-d9b5-40de-a4a9-021ce1e8667e",
      title: "Node.js 后端开发",
      description: "使用 Node.js 构建高性能的后端应用的完整指南。",
      content: "Node.js 后端开发内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "c8981a4f-ee42-43b3-82e9-b5f4f0e48b7f",
      title: "数据库设计与优化",
      description: "深入探讨数据库设计原则和性能优化策略。",
      content: "数据库设计与优化内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "9d730357-5d23-4807-9ff8-613b0d0937b1",
      title: "前端性能优化",
      description: "提升前端应用性能的实用技术和方法。",
      content: "前端性能优化内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "39421fc9-b2c8-47e0-9543-d31cf81c0afe",
      title: "微服务架构设计",
      description: "微服务架构的设计原则和实施策略。",
      content: "微服务架构设计内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "fbdd7004-ccaf-4684-ae63-f4948e869174",
      title: "Docker 容器化部署",
      description: "使用 Docker 进行应用容器化部署的完整指南。",
      content: "Docker 容器化部署内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "f1d45987-2b7f-4e4b-851a-b7f38e1bb69c",
      title: "GraphQL API 设计",
      description: "设计和实现高效 GraphQL API 的最佳实践。",
      content: "GraphQL API 设计内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "48dd7f51-919e-4705-8e3f-f1f4716346a9",
      title: "网络安全基础",
      description: "Web 应用安全的基本概念和防护措施。",
      content: "网络安全基础内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "30fd3cd8-a932-4b26-9ecd-d3acfba551f0",
      title: "移动端开发指南",
      description: "跨平台移动应用开发的策略和工具选择。",
      content: "移动端开发指南内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "887d5e25-610c-4dec-941b-649b859caf12",
      title: "云原生应用开发",
      description: "构建云原生应用的原则和实践方法。",
      content: "云原生应用开发内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "76cebf1e-989f-4324-923c-174d36be3b8c",
      title: "机器学习入门",
      description: "机器学习的基础概念和常用算法介绍。",
      content: "机器学习入门内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "fba69b74-d47d-40d4-8369-dd0b4f3b29fe",
      title: "DevOps 实践",
      description: "DevOps 文化和实践方法的全面介绍。",
      content: "DevOps 实践内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "a77bd6f1-765e-4ce1-b630-97cdc3c64c8e",
      title: "区块链技术原理",
      description: "区块链的基本原理和应用场景分析。",
      content: "区块链技术原理内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "3952178b-507b-4f77-b782-755d2ce917d7",
      title: "人工智能应用",
      description: "人工智能在各行业的应用案例和发展趋势。",
      content: "人工智能应用内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      uuid: "4970e980-07ce-4df6-9189-c4047f40e9cd",
      title: "大数据处理技术",
      description: "大数据处理的核心技术和工具介绍。",
      content: "大数据处理技术内容...",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  // 创建文章数据
  const createdArticles = await Promise.all(
    mockArticles.map((article) =>
      prisma.article.create({
        data: {
          uuid: article.uuid,
          title: article.title,
          description: article.description,
          content: article.content,
          author: "多bug的啸天犬", // 使用默认用户名作为作者
          date: new Date(article.createdAt), // 将 ISO 字符串转换为 Date 对象
          readCount: Math.floor(Math.random() * 1000), // 随机阅读数
          comments: [
            {
              user: "用户1",
              content: "很有用的文章！",
              time: new Date().toISOString(),
            },
            {
              user: "用户2",
              content: "学到了很多，感谢分享。",
              time: new Date().toISOString(),
            },
          ], // 默认评论
          likes: Math.floor(Math.random() * 100), // 随机点赞数
        },
      })
    )
  );

  // 更新用户的文章列表
  const articleUuids = createdArticles.map((article) => article.uuid);
  await prisma.userInfo.update({
    where: { uuid: defaultUser.uuid },
    data: {
      articles: articleUuids,
    },
  });

  // 创建一些额外的用户
  const additionalUsersData = [
    {
      username: "张三",
      email: "zhangsan@example.com",
      password: "$2b$10$exampleHashedPassword",
      articles: [articleUuids[0], articleUuids[1]], // 分配一些文章
      flowers: [],
      follows: [], // 先不设置关注，等创建后再更新
      role: ["user"],
      avatar: "",
    },
    {
      username: "李四",
      email: "lisi@example.com",
      password: "$2b$10$exampleHashedPassword",
      articles: [articleUuids[2], articleUuids[3]],
      flowers: [], // 先不设置粉丝，等创建后再更新
      follows: [],
      role: ["user"],
      avatar: "",
    },
    {
      username: "王五",
      email: "wangwu@example.com",
      password: "$2b$10$exampleHashedPassword",
      articles: [articleUuids[4], articleUuids[5]],
      flowers: [],
      follows: [], // 先不设置关注，等创建后再更新
      role: ["user"],
      avatar: "",
    },
  ];

  // 创建用户并获取创建后的用户对象（包含 UUID）
  const additionalUsers = await Promise.all(
    additionalUsersData.map((userData) =>
      prisma.userInfo.create({
        data: userData,
      })
    )
  );

  // 更新额外用户的关注和粉丝关系
  await Promise.all([
    // 张三关注默认用户
    prisma.userInfo.update({
      where: { uuid: additionalUsers[0].uuid },
      data: {
        follows: [defaultUser.uuid],
      },
    }),
    // 李四被默认用户关注
    prisma.userInfo.update({
      where: { uuid: additionalUsers[1].uuid },
      data: {
        flowers: [defaultUser.uuid],
      },
    }),
    // 王五关注默认用户
    prisma.userInfo.update({
      where: { uuid: additionalUsers[2].uuid },
      data: {
        follows: [defaultUser.uuid],
      },
    }),
  ]);

  // 更新默认用户的粉丝和关注列表
  await prisma.userInfo.update({
    where: { uuid: defaultUser.uuid },
    data: {
      flowers: [additionalUsers[1].uuid], // 李四是默认用户的粉丝
      follows: [additionalUsers[0].uuid, additionalUsers[2].uuid], // 默认用户关注张三和王五
    },
  });

  console.log("种子数据已成功生成！");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
