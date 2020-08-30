import * as React from 'react'
import { Word, GetWordQuery } from '../types'

import { useGetWordQuery } from './../graphql-operations'
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts';
// export interface Props {
//   wordString: string
// }

export const useWords = (wordString: string) => {
  const [word, setWord] = React.useState<Word>({})
  const { loading } = useGetWordQuery({
    variables: {
      word: wordString,
    },
    onCompleted: (data: GetWordQuery) => {
      console.log('Completed: ', data)
      setWord(data.word as Word)
    },
    onError: (error) => {
      console.log('Error getting words: ', error)
      triggerErrorAlert(error.message)
    },
  })

  return {
    word,
    loading,
  }
}
