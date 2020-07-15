import React from "react";
import { useParams } from "react-router-dom";
import Keyboard from "../components/Keyboard";

export default function Lesson() {
  const { lesson } = useParams();
  return (
    <>
      <div>Lesson {lesson}</div>
      <Keyboard />
    </>
  );
}
