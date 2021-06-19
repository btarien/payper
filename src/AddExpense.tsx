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
import { Expense } from "./data";

function AddExpense() {
  const [values, setValues] = React.useState<Expense>({
    title: "",
    price: 0,
    currency: "USD",
    date: new Date(),
    paidBy: "",
  });
  const [forWhom, setForWhom] = React.useState({
    me: false,
    alex: false,
    brian: false,
    julia: false,
    thomas: false,
  });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForWhom((prevState) => {
      return { ...prevState, [event.target.name]: event.target.checked };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submit");
    //todo: api call
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
            <FormControl component="fieldset">
              <FormLabel component="legend">For whom</FormLabel>
              <FormGroup>
                {Object.entries(forWhom).map(([name, bool]) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={bool}
                          onChange={handleCheck}
                          name={name}
                          color="primary"
                        />
                      }
                      label={name}
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
