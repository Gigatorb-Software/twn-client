import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import SectionContext from "../../lib/useSection";
import type { SectionState } from "../../lib/useSection";
import type { ReactChild, ReactConsumerChild } from "../../shared/types";
import type { ChangeEvent, ReactElement } from "react";

/**
 * The `SectionProvider` functional component is a
 * wrapper around `SectionContext.Provider` component.
 * @example
 * ```tsx
 * <SectionProvider>...</SectionProvider>
 * ```
 * @param props - sdlfksdjf
 * @returns The `SectionProvider` component skeleton.
 */
export const SectionProvider = (props: ReactChild): ReactElement => {
  const [section, setSection] = useState<any>("Home");
  const changeSection = (e: ChangeEvent<HTMLInputElement>) => {
    setSection(e.target.id);
  };
  const sectionState: SectionState = {
    currentlyActiveSection: section,
    changeSection: changeSection,
  };
  return (
    <SectionContext.Provider value={sectionState}>
      {props.children}
    </SectionContext.Provider>
  );
};

/**
 * The `SectionConsumer` functional component is a
 * wrapper around `SectionContext.Consumer` component.
 * @example
 * ```tsx
 * <SectionConsumer>...</SectionConsumer>
 * ```
 * @param props - The properties.
 * @returns The `SectionConsumer` component skeleton.
 */
export const SectionConsumer = (props: ReactConsumerChild): ReactElement => {
  return <SectionContext.Consumer>{props.children}</SectionContext.Consumer>;
};

/**
 * Renders the Section component.
 * @example
 * ```tsx
 * <Section>...</Section>
 * ```
 * @returns ReactElement - The Section skeleton.
 */
const Section = (): ReactElement => {
  return (
    <SectionConsumer>
      {(sectionState: SectionState): ReactElement => {
        return (
          <div className="px-8">
            <div
              className="btn-group-custom"
              role="group"
              aria-label="Section radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="sectionRadio"
                id="Home"
                autoComplete="off"
                onChange={sectionState.changeSection}
              />
              <label
                className="btn btn-outline-primary border-none"
                htmlFor="Home"
              >
                Home
              </label>
              <input
                type="radio"
                className="btn-check"
                name="sectionRadio"
                id="CasesAndOutcomes"
                autoComplete="off"
                onChange={sectionState.changeSection}
              />
              <label
                className="btn btn-outline-primary border-none"
                htmlFor="CasesAndOutcomes"
              >
                Cases and Outcomes
              </label>
              <input
                type="radio"
                className="btn-check border-none"
                name="sectionRadio"
                id="Inbox"
                autoComplete="off"
                onChange={sectionState.changeSection}
              />
              <label
                className="btn btn-outline-primary border-none"
                htmlFor="Inbox"
              >
                Inbox
              </label>
              <input
                type="radio"
                className="btn-check"
                name="sectionRadio"
                id="Calendar"
                autoComplete="off"
                onChange={sectionState.changeSection}
              />
              <label
                className="btn btn-outline-primary border-none"
                htmlFor="Calendar"
              >
                Calendar
              </label>
            </div>
          </div>
        );
      }}
    </SectionConsumer>
  );
};

export default Section;
