import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressList from '../components/ProgressList';
import Container from '@material-ui/core/Container';
import ProgressListFilter from '../components/ProgressListFilter';

export default function Progress() {
  const { student } = useParams();

  return (
    <>
      <Container maxWidth="md">
        <ProgressList student={student} type="Sections    - " />
      </Container>
    </>
  );
}
 //<ProgressList student={student} type="custom" /> . // for container for custom lessons