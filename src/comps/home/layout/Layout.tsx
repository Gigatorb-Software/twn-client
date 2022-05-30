import { SectionProvider } from "../Section";
import Banner from "./Banner";
import Content from "../content/Content";
import Section from "../Section";
import type { ReactChild } from "../../../shared/types";
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
      <Banner />
      <SectionProvider>
        <Section />
        <Content />
      </SectionProvider>
      {props.children}
    </>
  );
};

export default Layout;
