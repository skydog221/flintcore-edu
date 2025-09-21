import { useLogto } from "@logto/react";
import { Button } from "antd";

export function AuthButton() {
  const { signIn, signOut, isAuthenticated } = useLogto();

  return isAuthenticated ? (
    <Button
      onClick={() =>
        signOut(
          import.meta.env.VITE_APP_URL || "http://localhost:5173"
        )
      }
    >
      退出登录
    </Button>
  ) : (
    <Button
      onClick={() =>
        signIn(
          `${import.meta.env.VITE_APP_URL || "http://localhost:5173"}/callback`
        )
      }
    >
      登录
    </Button>
  );
}