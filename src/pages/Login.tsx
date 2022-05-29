import Layout from "../comps/layout/Layout";
import type { ReactElement } from "react";

/**
 * The `Login` functional component which is
 * a page for the `/login` route.
 * @example
 * ```tsx
 * <Login />
 * ```
 * @returns The `Login` component skeleton.
 */
const Login = (): ReactElement => {
  return <Layout>This is a login page!</Layout>;
};

export default Login;
