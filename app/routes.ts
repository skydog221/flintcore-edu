import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("/theme", "routes/theme/theme.tsx"),
  route("/me", "routes/me/me.tsx"),
] satisfies RouteConfig;
