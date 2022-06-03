import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Grid, ListItem } from "@mui/material";
import Registration from "../Form/Registration";
import TopBarOne from "../TopBar/TopBarOne";
import Demo from "../Form/Demo";
//import All from "../All";
//import FormDialog from "../FormDialog";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [open, setOpen] = React.useState(true);

  const handleChange = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          ></Grid>

          {index === 0 ? (
            <Box display="none" sx={{ p: 10 }}>
              <Typography>{children}</Typography>
            </Box>
          ) : (
            <Dialog open={open} onClose={handleClose}>
              <DialogContent
                style={{
                  padding: "40px",
                  paddingRight: "40px",
                }}
              >
                <DialogContentText
                  style={{
                    padding: "10px",
                  }}
                >
                  {children}
                </DialogContentText>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>
          )}
        </>
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
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 600,
      }}
    >
      <Tabs
        p={3}
        style={{
          backgroundColor: "#303032",
          color: "white",
          width: "200px",
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab
          disable="none"
          style={{
            color: "white",
          }}
          label=""
          {...a11yProps(0)}
        />
        <Tab style={{ color: "white" }} label="Add User" {...a11yProps(1)} />

        <Tab
          style={{ color: "white" }}
          label="Available Task"
          {...a11yProps(2)}
        />
        <Tab
          style={{ color: "white" }}
          label="Task Search"
          {...a11yProps(3)}
        ></Tab>
        <Tab style={{ color: "white" }} label="Next Task" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid></Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Registration value={setValue} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Demo />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Demo />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Demo />
      </TabPanel>
    </Box>
  );
}
