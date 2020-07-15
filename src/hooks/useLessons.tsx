import * as React from "react";
import { Lesson, GetAllLessonsQuery } from "../types";

import { useGetAllLessonsQuery } from "./../graphql-operations";

export function useLessons(): {
  lessons: Array<Lesson>;
  loading: boolean;
} {
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  // Query for Lessons
  const { loading } = useGetAllLessonsQuery({
    onCompleted: (data: GetAllLessonsQuery) => {
      console.log("Completed: ", data);
      if (data?.lessons) {
        setLessons(data.lessons as Lesson[]);
      }
    },
    onError: (error) => {
      console.log("Error getting lessons: ", error)
    }
  });

  return {
    lessons,
    loading,
  };
}
