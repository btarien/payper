import { Tabs, Tab, Grid } from "@material-ui/core";
import { Receipt, SwapHoriz } from "@material-ui/icons";
import React from "react";
import Expenses from "./Expenses";

enum TABS {
  EXPENSES = "expenses",
  BALANCES = "balances",
}

function Dashboard() {
  const [currentTab, setCurrentTab] = React.useState(TABS.EXPENSES);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: TABS) => {
    setCurrentTab(newValue);
  };
  return (
    <Grid container direction="column" className="h-100">
      <Grid item>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="navar"
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab icon={<Receipt />} value={TABS.EXPENSES} />
          <Tab icon={<SwapHoriz />} value={TABS.BALANCES} />
        </Tabs>
      </Grid>
      <Grid item xs>
        {currentTab === TABS.EXPENSES && <Expenses />}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
