import Layout from "../comps/home/layout/Layout";
import type { ReactElement } from "react";

/**
 * The `Home` functional component which is
 * a page for the `/home` route.
 * @example
 * ```tsx
 * <Home />
 * ```
 * @returns The `Home` component skeleton.
 */
const Home = (): ReactElement => {
  return <Layout>This is a home page!</Layout>;
};

export default Home;
