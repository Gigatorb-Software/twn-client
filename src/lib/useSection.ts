import { createContext } from "react";
import type { ChangeEvent } from "react";

export interface SectionState {
  currentlyActiveSection: "Home" | "CasesAndOutcomes" | "Inbox" | "Calendar";
  changeSection?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SectionContext = createContext({
  currentlyActiveSection: "Home",
});

export default SectionContext;
