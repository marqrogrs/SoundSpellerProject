import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Grid from '@material-ui/core/Grid';
import SpellingPatternsDetails from './../components/SpellingPatternsDetails';
import { LessonContext } from './../providers/LessonProvider';

export default function PatternsPublic() {
  const { rules, lessons } = useContext(LessonContext);

  return (
    <Container maxWidth="sm">
      {rules ? (
        Object.values(rules).map((rule) => (
          <SpellingPatternsDetails
            rule={rule}
            key={rule.rule_id}
            lessons={lessons?.filter((lesson) =>
              lesson.rules?.includes(rule.rule_id),
            )}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}
