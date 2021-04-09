import React, { useContext } from "react";

import Container from "@material-ui/core/Container";

import CircularProgress from "@material-ui/core/CircularProgress";

import SpellingPatternsDetails from "./../components/SpellingPatternsDetails";
import { LessonContext } from "./../providers/LessonProvider";

export default function SpelingPatterns() {
  const { rules } = useContext(LessonContext);
  console.log(rules);

  return (
    <Container maxWidth="sm">
      {rules ? (
        Object.values(rules).map((rule) => (
          <SpellingPatternsDetails rule={rule} key={rule.rule_id} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}
