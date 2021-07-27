import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createExpense } from "../redux/actions/expenses.js";
import { IExpense, IRootState } from "../type";

function AddExpense() {
  const users = useSelector((state: IRootState) => state.users);
  const [forWhom, setforWhom] = React.useState(
    users.reduce((acc, curr) => ({ ...acc, [curr.name]: false }), {})
  );
  const [values, setValues] = React.useState<IExpense>({
    title: "",
    amount: 0,
    currency: "USD",
    date: new Date(),
    paidBy: "",
    forWhom: [],
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [event.target.name]:
          event.target.name === "date"
            ? new Date(event.target.value)
            : event.target.value,
      };
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setforWhom((prevState) => {
      return { ...prevState, [event.target.name]: event.target.checked };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createExpense({ ...values, forWhom }));
  };

  return (
    <Grid container className="h-100" direction="column">
      <form className="h-100" onSubmit={handleSubmit}>
        <Grid item>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Box
                display="grid"
                gridTemplateColumns="auto 1fr auto"
                width="100%"
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="navigate back"
                  onClick={() => history.push("/dashboard")}
                >
                  <ArrowBackIos />
                </IconButton>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6" color="initial">
                    New Expense
                  </Typography>
                </Box>
                <Button color="inherit" type="submit">
                  Save
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs>
          <Box display="grid" gridGap={10} padding={2}>
            <TextField
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Amount"
              name="amount"
              type="number"
              value={values.amount}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={values.date.toISOString().split("T")[0]}
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
            <FormControl component="fieldset">
              <FormLabel component="legend">For whom</FormLabel>
              <FormGroup>
                {Object.entries(forWhom).map(([name, bool]) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleCheck}
                          name={name}
                          color="primary"
                        />
                      }
                      label={name}
                      key={name}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
}

export default AddExpense;
