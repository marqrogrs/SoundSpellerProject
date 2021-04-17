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

import { useFormik } from 'formik';
import { useStyles } from '../styles/material';

import { LessonContext } from '../providers/LessonProvider';

export default function CreateLesson() {
  const classes = useStyles();
  const [creatingLessonLoading, setCreatingLessonLoading] = useState(
    false,
  );
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

  const validate = (values) => {
    const errors = {};
    const {
      lesson_section,
      newLessonSection,
      title,
      description,
      rules,
      words,
    } = values;
    if (!title) {
      errors.title = 'Required';
    }

    if (!lesson_section && !newLessonSection) {
      errors.newLessonSection = 'Required';
    } else if (
      newLessonSection &&
      !/^[a-z0-9]+$/gi.test(newLessonSection)
    ) {
      errors.newLessonSection =
        'Lesson section can only contain letters and numbers';
    } else if (newLessonSection === 'newLessonSection') {
      errors.newLessonSection = 'Invalid lesson section';
    }

    if (!description) {
      errors.description = 'Required';
    }

    if (!words) {
      errors.words = 'Required';
    }
    return errors;
  };

  const handleRulesChanged = (event) => {
    setSelectedRules(event.target.value);
    setOpenRulesDropdown(false);
  };

  const formik = useFormik({
    initialValues: {
      lesson_section: '',
      newLessonSection: '',
      title: '',
      description: '',
      rules: [],
      words: [],
    },
    validate,
    onSubmit: (values) => {
      setCreatingLessonLoading(true);
      const {
        lesson_section,
        title,
        description,
        rules,
        words,
        newLessonSection,
      } = values;
      const lessonSection =
        lesson_section === 'newLessonSection'
          ? newLessonSection
          : lesson_section;
      const lessonWords = words
        .split(/[^A-Z]/gi)
        .filter((w) => w.length > 1)
        .map((w) => w.toUpperCase());
      createLesson({
        title,
        lesson_section: lessonSection,
        words: lessonWords,
        description,
        rules,
      })
        .then((res) => {
          setCreatingLessonLoading(false);
          swal('Yippee!', `Lesson has been created.`, 'success');
        })
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
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} direction="column">
        {!lessonsLoading && (
          <>
            <FormControl>
              <InputLabel>Lesson Section</InputLabel>
              <Select
                onChange={formik.handleChange}
                error={formik.errors.lessonSection}
                helperText={formik.errors.lessonSection}
                value={formik.values.lessonSection}
              >
                <MenuItem
                  value="newLessonSection"
                  className={classes.selectConstant}
                >
                  + New Lesson Section
                </MenuItem>
                {customLessonSections.map((section) => {
                  return (
                    <MenuItem key={section.id} value={section.id}>
                      {section.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {formik.values.lessonSection === 'newLessonSection' && (
              <TextField
                name="newLessonSection"
                label="New Lesson Section"
                variant="outlined"
                color="primary"
                margin="normal"
                error={formik.errors.newLessonSection}
                helperText={formik.errors.newLessonSection}
                value={formik.values.newLessonSection}
                onChange={formik.handleChange}
              ></TextField>
            )}
            <TextField
              id="title"
              label="Lesson Name"
              onChange={formik.handleChange}
              error={formik.errors.title}
              helperText={formik.errors.title}
              value={formik.values.title}
            />
            <TextField
              id="description"
              label="Lesson Description"
              onChange={formik.handleChange}
              error={formik.errors.description}
              helperText={formik.errors.description}
              value={formik.values.description}
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
              onChange={formik.handleChange}
              error={formik.errors.words}
              helperText={formik.errors.words}
              value={formik.values.words}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={formik.handleSubmit}
              disabled={
                Object.keys(formik.errors).length > 0 ||
                creatingLessonLoading
              }
            >
              Create Lesson
            </Button>
          </>
        )}
      </Grid>
    </Container>
  );
}
