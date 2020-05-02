import React, { Component, useEffect, useState } from 'react'

import Keyboard from './Inputs/Keyboard'
import Answer from './Inputs/Answer'
import { fetchWord } from '../api'
import { playButton } from './common/Miscellaneous'

console.log('relevant')
const TEST_WROD = '5e9743524377480ecf309ec3'
const Game = (props) => {
	const [isDictating, setIsDictating] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [word, setWord] = useState(null)

	useEffect(() => {
		console.log('just...')
		fetchWord(TEST_WROD).then((res) => setWord(res.data[0]))
	}, [])


	// Update Answer Component
	const handleUpdate = (value) => {
		// this.setState((prevState) => ({
		// 	playerAnswer: prevState.playerAnswer + value,
		// }))
		// document.getElementById('answer').value = this.state.playerAnswer
	}

	// Delete Answer Component
	const handleDelete = () => {
		// this.setState({
		// 	playerAnswer: this.state.playerAnswer.substr(
		// 		0,
		// 		this.state.playerAnswer.length - 1
		// 	),
		// })
		// document.getElementById('answer').value = this.state.playerAnswer
	}

	const speak = (word) => {
		const utterance = new SpeechSynthesisUtterance(word)
		speechSynthesis.speak(utterance)
	}

	const interval = (syll) => {}

	const playWord = () => {
		speak('The word is ' + word.word)

		// utterance.
		// speak('The word is ' + word.word)
		// speak('The word is ' + word.word)
		console.log('playing')
	}

	const wordHeader = word ? (
		<h3>
			<span>The word is: </span>
			<span style={{ color: 'red' }}>{word.word}</span>
		</h3>
	) : null

	const append = (letter) => setInputValue((prevValue) => prevValue + letter)
	const deleteLetter = () =>
		setInputValue((prevValue) => prevValue.slice(0, -1))

	const onVirtKeyboardKeyPressed = (button) => {
		switch (button) {
			case '{bksp}':
				deleteLetter()
				break
			case '{space}':
				append(' ')
				break
			default:
				append(button)
		}
  }
  
  const handlePlayerInput = (e) => setInputValue(e.target.value)

	const handleWordDicated = () => {
		setIsDictating(false)
	}

	return (
		<React.Fragment>
			<div className="row">
				{wordHeader}
				<span style={{ cursor: 'pointer' }} onClick={playWord}>
					{playButton}
				</span>
			</div>
			<Answer
				inputValue={inputValue}
				placeholder={'Type the word'}
				handlePlayerInput={handlePlayerInput}
			/>
			<Keyboard
				word={word}
				onKeyPress={onVirtKeyboardKeyPressed}
				onWordDictated={handleWordDicated}
				updateAnswer={handleUpdate}
				deleteAnswer={handleDelete}
			/>
		</React.Fragment>
	)
}

export default Game
