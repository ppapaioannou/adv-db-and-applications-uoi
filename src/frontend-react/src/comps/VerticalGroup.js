import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button> Coal Consumption </Button>
        <Button> Electricity Generation </Button>
        <Button> Energy Production </Button>
        <Button> Hydro Power Generation </Button>
        <Button> Natural Gas Production </Button>
        <Button> Natural Gas Proved Reserves </Button>
        <Button> Nuclear Power Generation </Button>
        <Button> Oil Consumption </Button>
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button> Oil Production </Button>
        <Button> Oil Proved Reserves </Button>
        <Button> Residential Electricity Use </Button>
        <Button> Happiness Score </Button>
        <Button> Human Development Index </Button>
        <Button> GDP </Button>
        <Button> Inequality Index Gini </Button>
        <Button> Total Population </Button>
      </ButtonGroup>
    </div>
  );
}
