import React from "react";
import type { ReactChild, ReactElement } from "react";

/**
 * Renders the Title component.
 * @returns ReactElement - The Title skeleton.
 */
const Title = (props: { children: ReactChild }): ReactElement => {
  return <div className="px-8 py-1 text-nowrap bg-light">{props.children}</div>;
};

export default Title;
