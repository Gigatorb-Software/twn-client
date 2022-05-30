import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Registration from "../Registration";
import "./SideBar.css";
import { Button, Grid, ListItem } from "@mui/material";
import All from "../All";
import FormDialog from "../FormDialog";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          >
            {index === 0 && <div></div>}
            {index === 1 && (
              <Grid item xs={2}>
                <ListItem style={{ padding: "0px" }}>
                  <Box
                    sx={{
                      width: 160,
                      height: 30,
                      borderBottom: 2,
                      borderColor: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography textAlign="center">Add User</Typography>
                  </Box>
                </ListItem>
              </Grid>
            )}

            {index === 2 && (
              <Grid item xs={2}>
                <ListItem style={{ padding: "0px" }}>
                  <Box
                    sx={{
                      width: 160,
                      height: 30,
                      borderBottom: 2,
                      borderColor: "primary.main",

                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography textAlign="center">Available Task</Typography>
                  </Box>
                </ListItem>
              </Grid>
            )}
            {index === 3 && (
              <Grid item xs={2}>
                <ListItem style={{ padding: "0px" }}>
                  <Box
                    sx={{
                      width: 160,
                      height: 30,
                      borderBottom: 2,
                      borderColor: "primary.main",

                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography textAlign="center">Available Task</Typography>
                  </Box>
                </ListItem>
              </Grid>
            )}
            {index === 4 && (
              <Grid item xs={2}>
                <ListItem style={{ padding: "0px" }}>
                  <Box
                    sx={{
                      width: 160,
                      height: 30,
                      borderBottom: 2,
                      borderColor: "primary.main",

                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography textAlign="center">Next Task</Typography>
                  </Box>
                </ListItem>
              </Grid>
            )}
          </Grid>

          {index === 0 ? (
            <Box display="none" sx={{ p: 10 }}>
              <Typography>{children}</Typography>
            </Box>
          ) : (
            <Box sx={{ p: 10 }}>{children}</Box>
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

export default function DemoSide() {
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
        height: 450,
      }}
    >
      <Tabs
        style={{ backgroundColor: "#303032", color: "white", width: "200px" }}
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
        <Tab style={{ color: "white" }} label="" {...a11yProps(0)} />
        <Tab style={{ color: "white" }} label="Add User" {...a11yProps(1)} />
        <Tab
          style={{ color: "white" }}
          label="Available Task"
          {...a11yProps(2)}
        />
        <Tab style={{ color: "white" }} label="Task Search" {...a11yProps(3)}>
          <FormDialog />
        </Tab>
        <Tab style={{ color: "white" }} label="Next Task" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid display="none"></Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Registration />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FormDialog />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <All />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <All />
      </TabPanel>
    </Box>
  );
}
