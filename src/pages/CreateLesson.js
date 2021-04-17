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
  const [selectedRules, setSelectedRules] = useState([]);
  const [openRulesDropdown, setOpenRulesDropdown] = useState(false);
  const history = useHistory();

  const {
    createLesson,
    customLessonSections,
    rules,
    lessonsLoading,
    createLessonSection,
  } = useContext(LessonContext);
  const validate = (values) => {
    const errors = {};
    const {
      lesson_section,
      title,
      description,
      words,
      newLessonSectionTitle,
      newLessonSectionDescription,
    } = values;
    if (!title) {
      errors.title = 'Required';
    }

    if (lesson_section === 'newLessonSection') {
      //Validate title and description
      if (!newLessonSectionTitle) {
        errors.newLessonSectionTitle = 'Required';
      }
      if (!newLessonSectionDescription) {
        errors.newLessonSectionDescription = 'Required';
      }
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
      newLessonSectionTitle: '',
      newLessonSectionDescription: '',
      title: '',
      description: '',
      words: [],
    },
    validate,
    onSubmit: async (values) => {
      setCreatingLessonLoading(true);
      var {
        lesson_section,
        title,
        description,
        words,
        newLessonSectionTitle,
        newLessonSectionDescription,
      } = values;
      //TODO: need error catching here
      if (lesson_section === 'newLessonSection') {
        lesson_section = await createLessonSection({
          title: newLessonSectionTitle,
          description: newLessonSectionDescription,
        });
      }

      const lessonWords = words
        .split(/[^A-Z]/gi)
        .filter((w) => w.length > 1)
        .map((w) => w.toUpperCase());
      createLesson({
        title,
        lesson_section,
        words: lessonWords,
        description,
        rules: selectedRules,
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
                name="lesson_section"
                onChange={formik.handleChange}
                error={formik.errors.lesson_section}
                helperText={formik.errors.lesson_section}
                value={formik.values.lesson_section}
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
            {formik.values.lesson_section === 'newLessonSection' && (
              <>
                <TextField
                  name="newLessonSectionTitle"
                  label="Lesson Section Title"
                  variant="outlined"
                  color="primary"
                  margin="normal"
                  error={formik.errors.newLessonSectionTitle}
                  helperText={formik.errors.newLessonSectionTitle}
                  value={formik.values.newLessonSectionTitle}
                  onChange={formik.handleChange}
                ></TextField>
                <TextField
                  name="newLessonSectionDescription"
                  label="Lesson Section Description"
                  variant="outlined"
                  color="primary"
                  margin="normal"
                  error={formik.errors.newLessonSectionDescription}
                  helperText={
                    formik.errors.newLessonSectionDescription
                  }
                  value={formik.values.newLessonSectionDescription}
                  onChange={formik.handleChange}
                ></TextField>
              </>
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
