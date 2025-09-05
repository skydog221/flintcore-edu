import { Hono } from "hono";

export const apiRoutes = new Hono();

// 临时测试数据
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

/**
 * 获取轮播图数据
 */

apiRoutes.post("/home/carousel", (c) => {
  const id = c.req.param("id");
  return c.json({
    success: true,
    data: carouselData,
    total: carouselData.length,
  });
});
