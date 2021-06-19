import { Grid, ThemeProvider } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import theme from "./theme";

const Dashboard = lazy(() => import("./Dashboard"));
const AddExpense = lazy(() => import("./AddExpense"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Grid container direction="column" className="h-100">
            <Grid item>
              <Navbar />
            </Grid>
            <Grid item xs>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={AddExpense} />
                <Redirect to="/dashboard" />
              </Switch>
            </Grid>
          </Grid>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
