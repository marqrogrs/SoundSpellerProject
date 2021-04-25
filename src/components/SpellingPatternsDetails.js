import React from "react";
import { useHistory } from "react-router-dom";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SpellingPatternsDetails = ({ rule, lessons }) => {
  const history = useHistory();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{rule.rule_title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box>
          <Typography>{rule.rule}</Typography>

          {lessons.length > 0 ? (
            <Box my={2}>
              <Typography variant="h6">Associated Lessons</Typography>

              <List>
                {lessons.map((lesson) => (
                  <ListItem button key={lesson.lesson_id}>
                    <ListItemText
                      primary={lesson.description}
                      onClick={() =>
                        history.push(`/lessons/${lesson.lesson_id}`)
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpellingPatternsDetails;
