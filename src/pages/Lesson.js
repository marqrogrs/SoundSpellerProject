import React from "react";
import Keyboard from "../components/Keyboard";
import { Container } from "@material-ui/core";

export default function Lesson() {
  return (
    <>
      <Container maxWidth="sm">
        <Keyboard />
      </Container>
    </>
  );
}
