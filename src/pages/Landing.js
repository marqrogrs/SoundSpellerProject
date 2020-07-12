import * as React from "react";
import { useLessons } from "../hooks/useLessons";

const Landing = () => {
  const { lessons, loading } = useLessons();
  console.log(lessons);
  return <>Hello from Landing </>;
};

export default Landing;
