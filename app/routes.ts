import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin-layout.tsx", [ // This will be the layout component for all admin routes
    route("dashboard", "routes/admin/dashboard.tsx"), // This will be the index route for /admin
    route("all-users", "routes/admin/all-users.tsx"), // This will be the /admin/all-users route
  ]),
] satisfies RouteConfig;
