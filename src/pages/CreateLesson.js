import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';

import { LessonContext } from '../providers/LessonProvider';

export default function CreateLesson() {
  const [lessonWords, setLessonWords] = useState('');
  const [lessonSection, setLessonSection] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedRules, setSelectedRules] = useState([]);
  const [openRulesDropdown, setOpenRulesDropdown] = useState(false);
  const history = useHistory();

  const {
    createLesson,
    customLessonSections,
    rules,
    lessonsLoading,
  } = useContext(LessonContext);

  const handleSubmit = () => {
    const words = lessonWords
      .split(/[^A-Z]/gi)
      .filter((w) => w.length > 1)
      .map((w) => w.toUpperCase());
    //TODO: lesson sections?
    createLesson({
      title: lessonTitle,
      words,
      description,
      rules: selectedRules,
    })
      .then((res) =>
        swal('Yippee!', `Lesson has been created.`, 'success'),
      )
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        if (err.rejectedWords) {
          swal(
            'Oops!',
            `The following words could not be found: ${err.rejectedWords.join(
              ', ',
            )}`,
            'error',
          );
        } else {
          console.error(err);
        }
      });
  };

  const handleRulesChanged = (event) => {
    setSelectedRules(event.target.value);
    setOpenRulesDropdown(false);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} direction="column">
        {!lessonsLoading && (
          <>
            <FormControl>
              <InputLabel>Lesson Section</InputLabel>
              <Select
                value={lessonSection}
                onChange={(e) => setLessonSection(e.target.value)}
              >
                {customLessonSections.map((section) => {
                  return (
                    <MenuItem key={section.id} value={section.id}>
                      {section.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              id="name"
              label="Lesson Name"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />
            <TextField
              id="description"
              label="Lesson Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl>
              <InputLabel>Rules</InputLabel>
              <Select
                multiple
                value={selectedRules}
                onOpen={() => setOpenRulesDropdown(true)}
                onChange={handleRulesChanged}
                open={openRulesDropdown}
                input={<Input />}
                renderValue={(selected) => (
                  <div>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={`${value}: ${rules[value].rule_title}`}
                      />
                    ))}
                  </div>
                )}
              >
                {Object.entries(rules).map(([id, ruleData]) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {`${id}: ${ruleData.rule_title}`}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              id="words"
              label="Lesson Words"
              multiline
              rows={20}
              placeholder="Enter lesson words here"
              value={lessonWords}
              onChange={(e) => setLessonWords(e.target.value)}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Create Lesson
            </Button>
          </>
        )}
      </Grid>
    </Container>
  );
}
