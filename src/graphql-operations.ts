import * as Types from './types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';


export const GetAllLessonsDocument = gql`
    query getAllLessons {
  lessons {
    _id
    description
    lesson_id
    lesson_section
    title
    words
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
export function useGetAllLessonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAllLessonsQuery, Types.GetAllLessonsQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetAllLessonsQuery, Types.GetAllLessonsQueryVariables>(GetAllLessonsDocument, baseOptions);
      }
export function useGetAllLessonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllLessonsQuery, Types.GetAllLessonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetAllLessonsQuery, Types.GetAllLessonsQueryVariables>(GetAllLessonsDocument, baseOptions);
        }
export type GetAllLessonsQueryHookResult = ReturnType<typeof useGetAllLessonsQuery>;
export type GetAllLessonsLazyQueryHookResult = ReturnType<typeof useGetAllLessonsLazyQuery>;
export type GetAllLessonsQueryResult = ApolloReactCommon.QueryResult<Types.GetAllLessonsQuery, Types.GetAllLessonsQueryVariables>;
export const GetLessonDocument = gql`
    query getLesson($lesson_id: String) {
  lesson(query: {lesson_id: $lesson_id}) {
    _id
    description
    lesson_id
    lesson_section
    title
    words
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
export function useGetLessonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetLessonQuery, Types.GetLessonQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetLessonQuery, Types.GetLessonQueryVariables>(GetLessonDocument, baseOptions);
      }
export function useGetLessonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetLessonQuery, Types.GetLessonQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetLessonQuery, Types.GetLessonQueryVariables>(GetLessonDocument, baseOptions);
        }
export type GetLessonQueryHookResult = ReturnType<typeof useGetLessonQuery>;
export type GetLessonLazyQueryHookResult = ReturnType<typeof useGetLessonLazyQuery>;
export type GetLessonQueryResult = ApolloReactCommon.QueryResult<Types.GetLessonQuery, Types.GetLessonQueryVariables>;
export const GetWordDocument = gql`
    query getWord($word: String) {
  word(query: {word: $word}) {
    _id
    word
    phonemes
    graphemes
    syllables
  }
}
    `;

/**
 * __useGetWordQuery__
 *
 * To run a query within a React component, call `useGetWordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordQuery({
 *   variables: {
 *      word: // value for 'word'
 *   },
 * });
 */
export function useGetWordQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetWordQuery, Types.GetWordQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetWordQuery, Types.GetWordQueryVariables>(GetWordDocument, baseOptions);
      }
export function useGetWordLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetWordQuery, Types.GetWordQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetWordQuery, Types.GetWordQueryVariables>(GetWordDocument, baseOptions);
        }
export type GetWordQueryHookResult = ReturnType<typeof useGetWordQuery>;
export type GetWordLazyQueryHookResult = ReturnType<typeof useGetWordLazyQuery>;
export type GetWordQueryResult = ApolloReactCommon.QueryResult<Types.GetWordQuery, Types.GetWordQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userId: String, $updates: UserUpdateInput!) {
  user: updateOneUser(query: {_id: $userId}, set: $updates) {
    _id
    progress {
      level
      lesson
      completed_words
      score
    }
    name
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<Types.UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;
export const GetUserDocument = gql`
    query getUser($userId: String) {
  user(query: {_id: $userId}) {
    _id
    progress {
      level
      lesson
      completed_words
      score
    }
    name
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<Types.GetUserQuery, Types.GetUserQueryVariables>;