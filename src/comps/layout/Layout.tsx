import Navbar from "./Navbar";
import type { ReactChild } from "../../shared/types";
import type { ReactElement } from "react";

/**
 * Renders the `Layout` functional component.
 * @example
 * ```tsx
 * <Layout>...</Layout>
 * ```
 * @param props - The properties.
 * @returns The `Layout` component skeleton.
 */
const Layout = (props: ReactChild): ReactElement => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
