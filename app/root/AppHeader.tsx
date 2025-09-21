import React from "react";
import { Layout } from "antd";
import { Logo } from "./Logo";
import { NavigationMenu } from "./NavigationMenu";
import { AuthButton } from "./AuthButton";

const { Header } = Layout;

export function AppHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Logo />
      <NavigationMenu />
      <AuthButton />
    </Header>
  );
}