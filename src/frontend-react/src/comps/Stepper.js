import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TransferList from './TransferList'
import CountrySelection from './CountrySelection'
import YearSelect from './YearSelect'



//import Page from './test.html';

//import BarChart from '../charts/BarChart'
//var htmlContent = require('../charts/Barplot.html');



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Start', 'Select indexes', 'Select Countries', 'Select time interval'];
}



function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Welcome'
    case 1:
      return <TransferList/>;
    case 2:
      return <CountrySelection/>;
    case 3:
      return <YearSelect/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        console.log("f")
        break
      case 1:
        //DataService.getCountries(selection).then((response) => {
        //    console.log(response.data)
        //});
        break
      case 2:
        console.log("Now Select Year Interval")
        break
      case 3:
        console.log("Here is your graph")
        break
      default:
        console.log("should never reach here")
        break
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const openInNewTab = () => {

    var newWindow = window.open();
    newWindow.document.location.href = "home/panagiotis/Documents/adv-db-and-applications-uoi/src/frontend-react/src/charts/Barplot.html";


    //var url = "../charts/Barplot.html"
    //const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    //if (newWindow) newWindow.opener = null
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <BarChart/>

            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
