import React from "react";

// export default function Demo() {
//   return <h1>Working...</h1>;
// }

import { useChromeTabs } from "@sinm/react-chrome-tabs";
import { Grid } from "@mui/material";

export default function Demo() {
  const [tabs, setTabs] = React.useState([]);
  const { ChromeTabs, addTab, updateTab, removeTab } = useChromeTabs({
    onTabActivated: (tabId) => {
      console.log("active:", tabId);
    },
    onTabReorder: (tabId, fromIndex, toIndex) => {},
    onTabClosed: (tabId) => {},
  });

  const createTab = () => {
    addTab({ id: `1`, title: `Crome`, favicon: true });
  };
  const removeTab1 = () => {
    removeTab(1);
  };
  return (
    <div>
      <button onClick={createTab}>Crome</button>

      <button onClick={removeTab1}>Remove</button>

      <ChromeTabs style={{ backgroundColor: "red" }} />
    </div>
  );
}
