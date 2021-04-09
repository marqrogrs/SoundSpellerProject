import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SpellingPatternsDetails = ({ rule }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{rule.rule_title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{rule.rule}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpellingPatternsDetails;
