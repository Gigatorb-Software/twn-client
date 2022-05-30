import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TopBarTwo() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="white"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="Case and outcomes" />
        <Tab value="three" label="Inbox" />
        <Tab value="four" label="Calender" />
      </Tabs>
    </Box>
  );
}
