import { useState } from "react"

import { Button } from "./styles"

import FormScore from "../../components/FormScore"

export default function StartGame() {
	const [gameStarted, setGameStarted] = useState(false)

	return (
		<>
			{gameStarted ? (
				<FormScore onSubmit={() => setGameStarted(false)} />
			) : (
				<Button onClick={() => setGameStarted(!gameStarted)}>
					Start a game
				</Button>
			)}
		</>
	)
}
