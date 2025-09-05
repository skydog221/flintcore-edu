import React, { useState, useEffect } from "react";
import { theme, Carousel } from "antd";

interface CarouselItem {
  id: number;
  url: string;
}
export const CarouselC: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/home/carousel", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.success) {
          setCarouselData(result.data);
        } else {
          console.error("API返回错误:", result);
        }
      } catch (error) {
        console.error("获取轮播图数据失败:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);
  return (
    <Carousel
      arrows
      autoplay={{ dotDuration: true }}
      autoplaySpeed={5000}
      style={{ marginTop: 30 }}
    >
      {carouselData.map((item) => (
        <div key={item.id}>
          <img
            src={item.url}
            alt={`Carousel ${item.id}`}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};
