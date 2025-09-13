import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Divider } from "antd";
import { useRestHeight } from "./../../hooks/useRestHeight";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100%",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const restHeight = useRestHeight();
  return (
    <>
      <Layout
        hasSider
        style={{
          height: `calc(100vh - ${restHeight}px - 1em)`,
          width: "100%",
          padding: "1em",
        }}
      >
        <Content
          style={{
            width: "30%",

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        ></Content>
        <Divider type="vertical" />
        <Content
          style={{
            width: "100%",

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          111
        </Content>
      </Layout>
    </>
  );
};

export default App;
