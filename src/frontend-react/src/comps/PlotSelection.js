import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import DataService from '../services/DataService';

// export the diagram type for the stepper to handle the next step
export var {diagramType} = ""; 

// this component's job is to get the diagram type
// that the user requested and inform the backend
// also based on the user choise the next step will differ
// line and bar plots can have multiple indexes but scatter
// only needs two index types to correlate

// handleFinalSelection() does the request


export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
    
  };

  const handleFinalSelection = () => {
    diagramType = value;
    DataService.getDiagramType(diagramType);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose type of diagram</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

        <FormControlLabel
          value="line"
          control={<Radio color="primary" />}
          label="Line Plot"
          labelPlacement="bottom"
        />

        <FormControlLabel
          value="bar"
          control={<Radio color="primary" />}
          label="Bar Plot"
          labelPlacement="bottom"
        />

        <FormControlLabel
          value="scatter"
          control={<Radio color="primary" />}
          label="Scatter Plot"
          labelPlacement="bottom"
        />
      </RadioGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={handleFinalSelection}
        aria-label="finalize selection"
        >Selection
      </Button>
    </FormControl>
  );
}