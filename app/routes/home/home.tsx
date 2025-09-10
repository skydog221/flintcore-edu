import React, { useState, useEffect, use } from "react";
import { theme, Carousel } from "antd";
import { CarouselC } from "./carousel/CarouselC";
import { AritcleList } from "./articleList/AritcleList";

const App: React.FC = () => {
  const [articles, setArticles] = useState<string[]>([]);
  useEffect(() => {
    fetch("/api/articles", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        console.log(data.data);
      });
  }, []);
  return (
    <>
      <CarouselC />
      <br />
      <br />
      <br />
      <AritcleList title="教程列表" articles={articles} />
      {/* <AritcleList title="我的收藏" /> */}
    </>
  );
};

export default App;
