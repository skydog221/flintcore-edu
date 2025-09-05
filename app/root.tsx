import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useLocation,
} from "react-router";
import React from "react";
import { Menu, ConfigProvider, Space } from "antd";
import { Layout as Layoutantd } from "antd";
import { orangeTheme } from "./lib/theme";
const { Header, Content, Footer } = Layoutantd;
const items = [
  { key: "home", label: "首页" },
  { key: "tutorial", label: "教程大厅" },
  { key: "forum", label: "星火论坛" },
  { key: "theme", label: "主题展示" },
  { key: "about", label: "关于我们" },
];

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e: any) => {
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "theme":
        navigate("/theme");
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider theme={orangeTheme}>
          <Layoutantd style={{ minHeight: "100vh" }}>
            <Header
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <div className="demo-logo">
                <img
                  src="/flintcore-logo-with_back_board-orange.svg"
                  alt="logo"
                  style={{ minHeight: 48, minWidth: 48 }}
                />
              </div>
              <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={getSelectedKeys()}
                items={items}
                onClick={handleMenuClick}
                style={{ flex: 1, minWidth: 0 }}
              />
            </Header>
            <Content style={{ padding: "0 48px" }}>{children}</Content>
            <Footer style={{ textAlign: "center" }}>
              Flintcore Edu ©{new Date().getFullYear()} Created by{" "}
              <a href="https://github.com/skydog221">skydog221</a> @ Flintcore
            </Footer>
          </Layoutantd>
        </ConfigProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
