// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";

// export default function TopBarTwo() {
//   const [value, setValue] = React.useState("one");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box style={{ backgroundColor: "black", color: "white" }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="white"
//         indicatorColor="primary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Home" />
//         <Tab value="two" label="Case and outcomes" />
//         <Tab value="three" label="Inbox" />
//         <Tab value="four" label="Calender" />
//       </Tabs>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//import Registration from "../Registration";
//import "./SideBar.css";
import { Button, Grid, ListItem } from "@mui/material";
import Registration from "../Form/Registration";
import TopBarOne from "../TopBar/TopBarOne";
import Demo from "../Form/Demo";
import { myContext } from "../Context";
//import All from "../All";
//import FormDialog from "../FormDialog";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <myContext.Consumer>
          {(value) => {
            value.changeFirst(index);
            console.log("topbar", value);
            return <div>{children}</div>;
          }}
        </myContext.Consumer>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function LeftSideBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        style={{
          backgroundColor: "black",
          color: "white",
        }}
        //orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab style={{ color: "white" }} label="Home" {...a11yProps(0)} />
        <Tab
          style={{ color: "white" }}
          label="Cases and outcome"
          {...a11yProps(1)}
        />
        <Tab style={{ color: "white" }} label="Inbox" {...a11yProps(2)} />
        <Tab
          style={{ color: "white" }}
          label="Calendar"
          {...a11yProps(3)}
        ></Tab>
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </Box>
  );
}
