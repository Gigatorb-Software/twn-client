import Layout from "./comps/layout/Layout";
import type { ReactElement } from "react";

/**
 * The `App` functional component which is
 * a page for the `/` route.
 * @example
 * ```tsx
 * <App />
 * ```
 * @returns The `App` component skeleton.
 */
const App = (): ReactElement => {
  return <Layout>Hello World!</Layout>;
};

export default App;
