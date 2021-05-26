import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PlotSelection from './PlotSelection';
import {diagramType} from './PlotSelection';

import IndexSelection from './IndexSelection';
import IndexSelectionScatter from './IndexSelectionScatter';
import CountrySelection from './CountrySelection';
import YearSelect from './YearSelect';


// the stepper consists of 4 steps
// -first the user must choose the diagram type that they want
// -then they must select index types
// -after that they must choose countries
// -and finaly the year interval
// after that they can see the diagram that was generated

// getStepContent()
// this function handles the componets that represent the steps



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
      return <PlotSelection/>;
    case 1:
      if (diagramType === 'scatter') {
        return <IndexSelectionScatter/>
      }
      else {
        return <IndexSelection/>;
      }      
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


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
            <Typography className={classes.instructions}>{"All done"}</Typography>
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
