import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";

const SpellingPatternsDetails = ({ rule, lessons }) => {
  console.log(lessons);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{rule.rule_title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box>
          <Typography>{rule.rule}</Typography>

          {lessons.length > 0 ? (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Associated Lessons
              </AccordionSummary>
              <AccordionDetails>
                {lessons.map((lesson) => (
                  <Typography key={lesson.lesson_id}>
                    {lesson.description}
                  </Typography>
                ))}
              </AccordionDetails>{" "}
            </Accordion>
          ) : (
            ""
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpellingPatternsDetails;
