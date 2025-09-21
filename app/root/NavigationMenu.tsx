import { useNavigate, useLocation } from "react-router";
import { Menu } from "antd";

const menuItems = [
  { key: "home", label: "首页" },
  { key: "tutorial", label: "教程大厅" },
  { key: "me", label: "创作中心" },
  { key: "forum", label: "星火论坛" },
  { key: "about", label: "关于我们" },
];

export function NavigationMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e: any) => {
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "me":
        navigate("/me");
        break;
      case "tutorial":
      case "forum":
      case "about":
        // 这些页面暂未实现
        console.log(`Clicked on ${e.key}`);
        break;
      default:
        break;
    }
  };

  const getSelectedKeys = () => {
    if (location.pathname === "/") return ["home"];
    if (location.pathname === "/theme") return ["theme"];
    return [];
  };

  return (
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={getSelectedKeys()}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
}