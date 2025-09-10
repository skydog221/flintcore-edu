import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
export const apiRoutes = new Hono();

/**
 * 获取轮播图数据
 */

apiRoutes.post("/home/carousel", async (c) => {
  const siteConfig = await prisma.siteConfig.findFirst();
  let carouselData = [];

  if (siteConfig && siteConfig.carousel) {
    try {
      // Prisma 的 Json 类型已经自动解析为 JavaScript 对象/数组
      carouselData = siteConfig.carousel as any;
    } catch (error) {
      console.error("处理轮播图数据失败:", error);
      carouselData = ["Error:" + error];
    }
  }

  return c.json({
    success: true,
    data: carouselData,
    total: carouselData.length,
    message: "获取轮播图数据成功",
  });
});

apiRoutes.post("/article", async (c) => {
  try {
    const body = await c.req.json();
    const articleInfo = await prisma.article.findUnique({
      where: {
        uuid: body.uuid,
      },
    });
    if (!articleInfo) {
      return c.json(
        {
          success: false,
          message: "文章不存在",
        },
        404
      );
    }
    return c.json({
      success: true,
      data: articleInfo,
      message: "获取文章信息成功",
    });
  } catch (e: any) {
    console.error("获取文章信息失败:", e);
    return c.json(
      {
        success: false,
        message: "获取文章信息失败: " + e.message,
      },
      500
    );
  }
});

apiRoutes.get("/articles", async (c) => {
  // 返回一个string[]，uuid列表
  try {
    const list = await prisma.article.findMany({
      select: {
        uuid: true,
      },
    });
    const uuidList = list.map((item) => item.uuid);
    return c.json({
      success: true,
      data: uuidList,
      total: uuidList.length,
      message: "获取文章列表成功",
    });
  } catch (e: any) {
    console.error("获取文章列表失败:", e);
    return c.json(
      {
        success: false,
        message: "获取文章列表失败: " + e.message,
      },
      500
    );
  }
});
