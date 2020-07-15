import React from "react";
import { useParams } from "react-router-dom";
import Keyboard from "../components/Keyboard";
import { Container, Breadcrumbs, Link } from "@material-ui/core";

export default function Lesson() {
  const { lesson } = useParams();
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <>
      <Container maxWidth="sm">
        <Keyboard />
      </Container>
    </>
  );
}
