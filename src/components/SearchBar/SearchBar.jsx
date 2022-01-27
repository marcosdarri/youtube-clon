import React from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={2}
        >
          <Grid container item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Paper elevation={6} className="searchBarPaper">
              <TextField
                fullWidth
                label="Search..."
                onChange={this.handleChange}
              />
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
              variant="contained"
              className="searchBaButton"
              onClick={this.handleSubmit}
            >
              Button
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SearchBar;
