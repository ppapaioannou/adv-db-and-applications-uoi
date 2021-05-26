import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


import DataService from '../services/DataService';

// export the countries list for the country selection step
export var {countriesScatter} = [];

// this step presents the user with two drop down menus
// with all the available indexes, after the user finalizes
// their selection a request is made to the backend to get the list
// of available countries for the next step

// handleFinalSelection() does the request

const indexes =
      ['Coal Consumption','Electricity Generation','Energy Production',
       'Hydro Power Generation','Natural Gas Production','Natural Gas Proved Reserves',
       'Nuclear Power Generation', 'Oil Consumption', 'Oil Production',
       'Oil Proved Reserves','Residential Electricity Use','Happiness Score',
       'Human Development Index','GDP','Inequality Index Gini','Total Population']

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const [index1, setIndex1] = React.useState('');

  const [index2, setIndex2] = React.useState('');

  const handleIndex1Change = (event) => {
    setIndex1(event.target.value);
  };

  const handleIndex2Change = (event) => {
    setIndex2(event.target.value);
  };

  const handleFinalSelection = () => {
    // join the indexes with '-' and remove any white space
    var selection = index1 + "-" + index2;
    selection = selection.replace(/\s/g, "")
    // get a list from the respone that has what we need
    DataService.getCountries(selection).then((response) => {
        countriesScatter = response.data
      });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">Index 1</InputLabel>
        <Select defaultValue=""
          id="select-start" 
          value={index1}
          onChange={handleIndex1Change}
        >
          {indexes.map(index => (
            <MenuItem value={index}>{index}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose index type</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">Index2</InputLabel>
        <Select defaultValue=""
          id="select-end" 
          value={index2}
          onChange={handleIndex2Change}
        >
          {indexes.map(index => (
            <MenuItem value={index}>{index}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose second index type</FormHelperText>
      </FormControl>
      <br/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleFinalSelection}
        aria-label="finalize selection"
        >Selection
      </Button>
    </div>
  );
}
