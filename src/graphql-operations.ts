import * as Types from "./types";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export const GetAllLessonsDocument = gql`
  query getAllLessons {
    lessons {
      _id
      lesson_id
      words {
        _id
        word
      }
    }
  }
`;

/**
 * __useGetAllLessonsQuery__
 *
 * To run a query within a React component, call `useGetAllLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLessonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLessonsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetAllLessonsQuery,
    Types.GetAllLessonsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetAllLessonsQuery,
    Types.GetAllLessonsQueryVariables
  >(GetAllLessonsDocument, baseOptions);
}
export function useGetAllLessonsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetAllLessonsQuery,
    Types.GetAllLessonsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetAllLessonsQuery,
    Types.GetAllLessonsQueryVariables
  >(GetAllLessonsDocument, baseOptions);
}
export type GetAllLessonsQueryHookResult = ReturnType<
  typeof useGetAllLessonsQuery
>;
export type GetAllLessonsLazyQueryHookResult = ReturnType<
  typeof useGetAllLessonsLazyQuery
>;
export type GetAllLessonsQueryResult = ApolloReactCommon.QueryResult<
  Types.GetAllLessonsQuery,
  Types.GetAllLessonsQueryVariables
>;
export const GetLessonDocument = gql`
  query getLesson($lesson_id: String) {
    lesson(query: { lesson_id: $lesson_id }) {
      _id
      lesson_id
      words {
        _id
        word
        graphemes
        syllables
        phonemes {
          _id
          phoneme
        }
      }
    }
  }
`;

/**
 * __useGetLessonQuery__
 *
 * To run a query within a React component, call `useGetLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonQuery({
 *   variables: {
 *      lesson_id: // value for 'lesson_id'
 *   },
 * });
 */
export function useGetLessonQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetLessonQuery,
    Types.GetLessonQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetLessonQuery,
    Types.GetLessonQueryVariables
  >(GetLessonDocument, baseOptions);
}
export function useGetLessonLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetLessonQuery,
    Types.GetLessonQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetLessonQuery,
    Types.GetLessonQueryVariables
  >(GetLessonDocument, baseOptions);
}
export type GetLessonQueryHookResult = ReturnType<typeof useGetLessonQuery>;
export type GetLessonLazyQueryHookResult = ReturnType<
  typeof useGetLessonLazyQuery
>;
export type GetLessonQueryResult = ApolloReactCommon.QueryResult<
  Types.GetLessonQuery,
  Types.GetLessonQueryVariables
>;