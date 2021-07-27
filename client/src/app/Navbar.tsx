import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Favorite, Person, Search } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

enum TABS {
  SEARCH = "search",
  PROFILE = "profile",
  FAVORITES = "favorites",
}

const Navbar = () => {
  const [currentTab, setCurrentTab] = React.useState(TABS.SEARCH);
  let history = useHistory();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: TABS) => {
    setCurrentTab(newValue);
    history.push(`/${newValue}`);
  };
  return (
    <AppBar position="static" color="transparent">
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="navar"
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab icon={<Search />} value={TABS.SEARCH} />
        <Tab icon={<Favorite />} value={TABS.FAVORITES} />
        <Tab icon={<Person />} value={TABS.PROFILE} />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
