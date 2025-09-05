import React, { useState, useEffect } from "react";
import { theme, Carousel } from "antd";
import { CarouselC } from "./carousel/CarouselC";
import { AritcleList } from "./articleList/AritcleList";

const App: React.FC = () => {
  return (
    <>
      <CarouselC />
      <br />
      <br />
      <br />
      <AritcleList title="精选教程" content="精选教程" />
      <AritcleList title="我的收藏" content="我的收藏" />
    </>
  );
};

export default App;
