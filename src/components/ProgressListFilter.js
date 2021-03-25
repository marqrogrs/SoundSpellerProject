import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



//TODO:@J Add two checkboxes for `Custom Lesson`. (https://material-ui.com/components/checkboxes/)
// - one should be labeled "Custom"
// - one should be labeled "Standard"
// This way, a user can choose to see only Custom, only Standard or all lessons
// When the `Custom` checkbox is checked, a state variable (hint: useState()) called `showCustomLessons` should be set to True
// When the `Custom` checkbox is unchecked, a state variable (hint: useState()) called `showCustomLessons` should be set to False
// When the `Standard` checkbox is checked, a state variable (hint: useState()) called `showStandardLessons` should be set to True
// When the `Standard` checkbox is unchecked, a state variable (hint: useState()) called `showStandardLessons` should be set to False

//TODO:@J continue fleshing out these filter options. Browse through the different `Input` components in MaterialUi (https://material-ui.com/components)
// for inspo on what types of inputs you want to use. Each input should be hooked up to a state variable like the checkboxes.

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    const [checkedA, setcheckedA] = useState(true),
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const handleChange = (event) => {

    setState({ ...state, [event.target.name === "checkedA"]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={checkedA} onChange={handleChange} name="checkedA" />}
        label="A"
      />

      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedB" />}
        label="B"
      />

      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedC" />}
        label="C"
      />

      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedD" />}
        label="D"
      />
    </FormGroup>
  );
}
/*}
        <div>
            <div>
                Lesson Number
            </div>
            <div>
                Spelling Patterns
            </div>
            <div>
                Level Completed
            </div>
            <div>
                Custom Lesson/ Or Not
            </div>
            <div>
                Lesson Score
            </div>
            <div>
                Assigned Lessons
            </div>
        </div>
    )
} */
