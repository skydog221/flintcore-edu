import React, { useEffect, useState, type ReactNode } from "react";
import { Card, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useWindowSize } from "../../hooks/useWindowSize";
interface AritcleListProps {
  title: string;
  articles: string[];
}
export const AritcleList = (props: AritcleListProps) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const cardHeight = 300;
  const cardWidth = 300;
  const cardGap = 16;
  const maxRows = 1;

  const windowSize = useWindowSize();

  const getZoomLevel = () => {
    if (typeof window !== "undefined") {
      return window.devicePixelRatio || 1;
    }
    return 1;
  };

  const zoomLevel = getZoomLevel();
  const containerWidth =
    windowSize.width > 0 ? (windowSize.width - 80) / zoomLevel : 1200;

  const calculateCardsPerRow = () => {
    if (containerWidth <= 0) return 1;

    const availableWidth = containerWidth;
    const cardsPerRow = Math.floor(availableWidth / (cardWidth + cardGap));

    if (availableWidth >= 1400) return 5;
    if (availableWidth >= 1100) return 4;
    if (availableWidth >= 800) return 3;
    if (availableWidth >= 500) return 2;
    return 1;
  };

  const cardsPerRow = calculateCardsPerRow();
  const maxVisibleCards = cardsPerRow * maxRows;

  useEffect(() => {
    setLoadingStates(props.articles.map(() => true));
    setArticles([]);

    async function getArticles(uuid: string, index: number) {
      try {
        const response = await fetch("/api/article", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uuid }),
        });
        const data = await response.json();

        setLoadingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });

        return data;
      } catch (error) {
        setLoadingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
        return { success: false };
      }
    }

    props.articles.forEach((uuid, index) => {
      getArticles(uuid, index).then((data) => {
        if (data.success && data.data) {
          setArticles((prev) => {
            const exists = prev.some(
              (article) => article.uuid === data.data.uuid
            );
            if (!exists) {
              return [...prev, data.data];
            }
            return prev;
          });
        }
      });
    });
  }, [props.articles]);

  const renderCards = () => {
    const cards: React.ReactNode[] = [];
    const startIndex = currentPage * maxVisibleCards;
    const endIndex = startIndex + maxVisibleCards;

    const visibleArticles = articles.slice(startIndex, endIndex);
    visibleArticles.forEach((article: any) => {
      cards.push(
        <Card
          key={article.uuid}
          style={{ width: 300 }}
          cover={<img alt="cover" src={article.cover} />}
        >
          <Card.Meta title={article.title} description={article.description} />
        </Card>
      );
    });

    const visibleLoadingStates = loadingStates.slice(startIndex, endIndex);
    visibleLoadingStates.forEach((isLoading, index) => {
      if (isLoading) {
        cards.push(
          <Card
            key={`loading-${startIndex + index}`}
            style={{ width: 300 }}
            loading={true}
          />
        );
      }
    });

    return cards;
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const totalCards = articles.length + loadingStates.filter(Boolean).length;
    const maxPage = Math.ceil(totalCards / maxVisibleCards) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(
    (articles.length + loadingStates.filter(Boolean).length) / maxVisibleCards
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (totalPages <= 1) return;

    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (diff > swipeThreshold && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (diff < -swipeThreshold && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <p
        className="text-primary"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        {props.title}
      </p>
      <br />
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "0 40px",
          minHeight: `${cardHeight + 32}px`,
          boxSizing: "border-box",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {totalPages > 1 && (
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "50%", // 调整到一行卡片高度的中心点
              transform: "translateY(-50%)",
              zIndex: 1,
              cursor: currentPage > 0 ? "pointer" : "not-allowed",
              opacity: currentPage > 0 ? 1 : 0.5,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            onClick={handlePrev}
          >
            <LeftOutlined />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: `${cardGap}px`,
            maxWidth: "100%",
            maxHeight: `${cardHeight}px`,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {renderCards()}
        </div>
        {totalPages > 1 && (
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              cursor: currentPage < totalPages - 1 ? "pointer" : "not-allowed",
              opacity: currentPage < totalPages - 1 ? 1 : 0.5,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            onClick={handleNext}
          >
            <RightOutlined />
          </div>
        )}
        {totalPages > 1 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "14px",
              color: "#666",
              width: "100%",
            }}
          >
            {currentPage + 1} / {totalPages}
          </div>
        )}
      </div>
    </>
  );
};
