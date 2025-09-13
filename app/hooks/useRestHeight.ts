import { useState, useEffect } from "react";

interface LayoutDimensions {
  headerFooterHeight: number;
  windowHeight: number;
}

export function useRestHeight(): number {
  const [dimensions, setDimensions] = useState(0);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    function handleResize() {
      const headerElement = document.querySelector(".ant-layout-header");
      const footerElement = document.querySelector(".ant-layout-footer");

      const headerHeight = headerElement ? headerElement.clientHeight : 0;
      const footerHeight = footerElement ? footerElement.clientHeight : 0;

      setDimensions(headerHeight + footerHeight);
    }

    // 立即调用一次以获取初始大小
    handleResize();

    // 添加事件监听器
    window.addEventListener("resize", handleResize);

    // 清理函数，移除事件监听器
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
