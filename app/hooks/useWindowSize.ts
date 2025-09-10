import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 确保在浏览器环境中执行
    if (typeof window === 'undefined') return;
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 立即调用一次以获取初始大小
    handleResize();

    // 添加事件监听器
    window.addEventListener('resize', handleResize);
    
    // 清理函数，移除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 空依赖数组表示这个effect只在组件挂载和卸载时运行

  return windowSize;
}