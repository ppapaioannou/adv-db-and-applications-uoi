import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import DataService from '../services/DataService';

import {years} from './CountrySelection';

// this step presents the user with two drop down menus
// with all the available years that satisfy the selected
// criterias, after the user finalizes
// their selection the final request is made to the backend
// and the diagram is ready to be created

// handleFinalSelection() does the request

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

  const [minYear, setMinYear] = React.useState('');

  const [maxYear, setMaxYear] = React.useState('');

  const handleMinYearChange = (event) => {
    setMinYear(event.target.value);
  };

  const handleMaxYearChange = (event) => {
    setMaxYear(event.target.value);
  };

  const handleFinalSelection = () => {
    // join the years with '-'
    var selection = minYear + "-" + maxYear;
    DataService.getFinalData(selection);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">From</InputLabel>
        <Select defaultValue=""
          id="select-start" 
          value={minYear}
          onChange={handleMinYearChange}
        >
          {years.map(year => (
            <MenuItem value={year}>{year}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose starting year</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">To</InputLabel>
        <Select defaultValue=""
          id="select-end" 
          value={maxYear}
          onChange={handleMaxYearChange}
        >
          {years.map(year => (
            <MenuItem value={year}>{year}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose ending year</FormHelperText>
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
