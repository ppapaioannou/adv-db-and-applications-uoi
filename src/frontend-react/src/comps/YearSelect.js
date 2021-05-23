import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {years} from './CountrySelection';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//const years = [1800, 1801, 1802, 1803, 1804];

export default function SimpleSelect() {
  const classes = useStyles();

  const [minYear, maxYear, setYear] = React.useState('');

  //const eksere = {minYear, maxYear};

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">From</InputLabel>
        <Select defaultValue="" id="select-start">
          value={minYear}
          onChange={handleChange}
          {years.map((year, index) => (
            <MenuItem value={index}>{year}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose starting year</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">To</InputLabel>
        <Select defaultValue="" id="select-end">
          value={maxYear}
          onChange={handleChange}
          {years.map((year, index) => (
            <MenuItem value={index}>{year}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Please choose ending year</FormHelperText>
      </FormControl>
    </div>
  );
}
