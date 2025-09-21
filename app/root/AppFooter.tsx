import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export function AppFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Flintcore Edu ©{new Date().getFullYear()} Created by{" "}
      <a href="https://github.com/skydog221">skydog221</a> @ Flintcore
    </Footer>
  );
}