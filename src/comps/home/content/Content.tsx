import SectionContext from "../../../lib/useSection";
import CasesAndOutcomes from "./casesAndOutcomes/CasesAndOutcomes";
import Home from "./home/Home";
import Inbox from "./inbox/Inbox";
import Calendar from "./calendar/Calendar";
import type { ReactElement } from "react";

/**
 * Renders the Content component.
 * @returns ReactElement - The Content skeleton.
 */
const Content = (): ReactElement => {
  return (
    <SectionContext.Consumer>
      {({ currentlyActiveSection }) => {
        if (currentlyActiveSection === "CasesAndOutcomes") {
          return <CasesAndOutcomes />;
        } else if (currentlyActiveSection === "Inbox") {
          return <Inbox />;
        } else if (currentlyActiveSection === "Calendar") {
          return <Calendar />;
        }
        return <Home />;
      }}
    </SectionContext.Consumer>
  );
};

export default Content;
