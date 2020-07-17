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
        //Sort lessons
        const lessons = data.lessons.sort((a, b) => {
          let aLessonID: string = a?.lesson_id!;
          let bLessonID: string = b?.lesson_id!;
          function isNumber(char: string) {
            return char >= "0" && char <= "9";
          }
          if (isNumber(aLessonID.charAt(0)) && isNumber(bLessonID.charAt(0))) {
            return parseFloat(aLessonID) - parseFloat(bLessonID);
          } else if (
            isNumber(aLessonID.charAt(0)) &&
            !isNumber(bLessonID.charAt(0))
          ) {
            return -1;
          } else if (
            !isNumber(aLessonID.charAt(0)) &&
            isNumber(bLessonID.charAt(0))
          ) {
            return 1;
          } else {
            return 0;
          }
        });
        console.log(lessons);
        setLessons(lessons as Lesson[]);
      }
    },
    onError: (error) => {
      console.log("Error getting lessons: ", error);
    },
  });

  return {
    lessons,
    loading,
  };
}
