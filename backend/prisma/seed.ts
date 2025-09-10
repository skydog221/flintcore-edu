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

  // 创建 SiteConfig 数据
  await prisma.siteConfig.create({
    data: {
      carousel: carouselData,
    },
  });

  // 清理现有文章数据（可选）
  await prisma.article.deleteMany();

  // 创建顶级文章（无父文章）
  const parentArticles = await Promise.all([
    prisma.article.create({
      data: {
        title: "顶级文章 1",
        content: "这是顶级文章 1 的内容",
        description: "这是顶级文章 1 的介绍",
        author: "张三",
        cover:
          "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
        comments: ["评论1", "评论2"],
        likes: 15,
        uuid: "f164459b-8e5e-442f-8cba-e94b95417872",
      },
    }),
    prisma.article.create({
      data: {
        title: "顶级文章 2",
        cover:
          "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
        content: "这是顶级文章 2 的内容",
        author: "李四",
        comments: ["评论A", "评论B", "评论C"],
        likes: 8,
        uuid: "13df2190-b16d-49e0-ae11-72dee774c713",
      },
    }),
  ]);

  // 创建子文章（关联到父文章）
  await Promise.all([
    prisma.article.create({
      data: {
        cover:
          "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
        title: "子文章 1.1",
        content: "顶级文章1的第一个子文章",
        author: "王五",
        parentArticleId: parentArticles[0].uuid,
        comments: ["子评论1"],
        likes: 3,
        uuid: "accfa887-d9b5-40de-a4a9-021ce1e8667e",
      },
    }),
    prisma.article.create({
      data: {
        cover:
          "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
        title: "子文章 1.2",
        content: "顶级文章1的第二个子文章",
        author: "王五",
        parentArticleId: parentArticles[0].uuid,
        comments: [],
        likes: 0,
        uuid: "c8981a4f-ee42-43b3-82e9-b5f4f0e48b7f",
      },
    }),
    prisma.article.create({
      data: {
        cover:
          "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
        title: "子文章 2.1",
        content: "顶级文章2的子文章",
        author: "赵六",
        parentArticleId: parentArticles[1].uuid,
        comments: ["子评论A", "子评论B"],
        likes: 7,
        uuid: "9d730357-5d23-4807-9ff8-613b0d0937b1",
      },
    }),
  ]);

  for (let i = 0; i < 10; i++) {
    await prisma.article.create({
      data: {
        title: "文章 " + i,
        content: "这是第" + i + "篇文章的内容",
        author: "张三",
      },
    });
  }
  // 创建无关联的独立文章
  await prisma.article.create({
    data: {
      cover:
        "https://tc-new.z.wiki/autoupload/f/rOLgk6AZNCN0b5f4pqrSUiNUZen7pcKcfP-lKvzzVj2yl5f0KlZfm6UsKj-HyTuv/20250909/Elro/965X535/%E7%BC%96%E7%A8%8B_%E5%B0%91%E5%B9%B4.jpg/webp",
      title: "独立文章",
      content: "这篇文章没有关联任何文章",
      author: "钱七",
      comments: ["独立评论1", "独立评论2"],
      likes: 12,
      uuid: "4970e980-07ce-4df6-9189-c4047f40e9cd",
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
