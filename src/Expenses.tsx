import {
  Box,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { Expense, expenses } from "./data";

function Expenses() {
  const history = useHistory();

  return (
    <Grid container className="h-100" direction="column">
      <Grid item xs>
        <List>
          {expenses.map((expense: Expense, index: number) => {
            return (
              <ListItem key={index} divider>
                <ListItemText
                  primary={expense.title}
                  secondary={`paid by ${expense.paidBy}`}
                />
                <Box>
                  <Typography variant="h6" color="textPrimary">
                    {new Intl.NumberFormat("en-us", {
                      style: "currency",
                      currency: "USD",
                    }).format(expense.price)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Intl.DateTimeFormat("en-US").format(expense.date)}
                  </Typography>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item>
        <Box
          paddingX={1}
          display="grid"
          gridTemplateColumns="1fr auto 1fr"
          bgcolor="gray"
          alignItems="center"
        >
          <Box>
            <Typography variant="body1" color="textSecondary">
              MY TOTAL
            </Typography>
            <Typography variant="body1" color="initial">
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(expenses[0].price)}
            </Typography>
          </Box>
          <Fab
            color="primary"
            aria-label="add expense"
            onClick={() => history.push("/new")}
            style={{
              position: "relative",
              top: "-50%",
            }}
          >
            <Add />
          </Fab>

          <Box display="flex" alignItems="flex-end" flexDirection="column">
            <Typography variant="body1" color="textSecondary">
              TOTAL EXPENSES
            </Typography>
            <Typography variant="body1" color="initial">
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(
                expenses.reduce((acc, expense) => acc + expense.price, 0)
              )}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Expenses;
