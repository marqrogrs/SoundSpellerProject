import React from "react";
import { useParams } from "react-router-dom";

export default function Lesson() {
  const { lesson } = useParams();
  return <div>Lesson {lesson}</div>;
}
