import * as React from "react";
import { UpdateUserMutationVariables, GetUserQuery } from "../types";
import { useUpdateUserMutation, useGetUserQuery } from "./../graphql-operations";
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts';

export function useUser(userId: string) {
  const [userProgress, setUserProgress] = React.useState<string>("");
  const [updateUser] = useUpdateUserMutation();
  
  const { loading } = useGetUserQuery({
    variables: {
      userId,
    },
    onCompleted: (data: GetUserQuery) => {
      console.log('Completed: ', data)
      setUserProgress(data.user?.progress || "")
    },
    onError: (error) => {
      console.log('Error getting user: ', error)
    },
  })

  const updateProgress = async (progress: string) => {
    const variables: UpdateUserMutationVariables = {
      userId,
      updates: {
        progress
      }
    }
    try {
      const result = await updateUser({ variables })
      setUserProgress(progress)
    } catch (error) {
      console.log(error)
      triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
    }
  }
  
  return {
    loading,
    updateProgress,
    userProgress
  };
}
