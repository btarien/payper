import {
  AppBar,
  Grid,
  IconButton,
  TextField,
  Toolbar,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { Expense } from "./data";

function AddExpense() {
  const [values, setValues] = React.useState<Expense>({
    title: "",
    price: 0,
    currency: "USD",
    date: new Date(),
    paidBy: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  return (
    <Grid container className="h-100" direction="column">
      <form className="h-100">
        <Grid item xs>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="navigate back"
              >
                <ArrowBackIos />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs>
          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Amount"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            label="Paid by"
            name="paidBy"
            value={values.paidBy}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </form>
    </Grid>
  );
}

export default AddExpense;
