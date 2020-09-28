import * as React from "react";
import { UpdateUserMutationVariables, GetUserQuery, UserProgress } from "../types";
import { useUpdateUserMutation, useGetUserQuery } from "./../graphql-operations";
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts';

export function useUser(userId: string) {
  const [userProgress, setUserProgress] = React.useState<UserProgress[]>([]);
  const [name, setName] = React.useState("");
  const [updateUser] = useUpdateUserMutation();
  
  const { loading } = useGetUserQuery({
    variables: {
      userId,
    },
    onCompleted: (data: GetUserQuery) => {
      console.log('Completed: ', data)
      setUserProgress(data.user?.progress as UserProgress[])
      setName(data.user?.name as string)
    },
    onError: (error) => {
      console.log('Error getting user: ', error)
    },
  })

  const updateProgress = async (progressUpdate: UserProgress) => {
    console.log(`Updating progress in useUser`)
    const currentProgress = userProgress
    const updatedProgress = currentProgress.map(existingProgressObj => {
      if(existingProgressObj.lesson === progressUpdate.lesson){
        existingProgressObj = progressUpdate
      }
      const { lesson, level, completed_words, score } = existingProgressObj
      return { lesson, level, completed_words, score }
    })
    console.log(`updated progress: `, updatedProgress)
    const variables: UpdateUserMutationVariables = {
      userId,
      updates: {
        progress: updatedProgress
      }
    }
    try {
      await updateUser({ variables })
      console.log(`Updated user progress`)
      setUserProgress(updatedProgress)
    } catch (error) {
      console.log(error)
      triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
    }
  }

  const updateName = async (name: string) => {
    console.log(`Updating name in useUser`)
    const variables: UpdateUserMutationVariables = {
      userId,
      updates: {
        name
      }
    }
    try {
      await updateUser({ variables })
      console.log(`Updated user progress`)
      setName(name)
    } catch (error) {
      console.log(error)
      triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
    }
  }
  
  return {
    loading,
    updateProgress,
    updateName,
    userProgress,
    name,
  };
}
