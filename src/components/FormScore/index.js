import { useContext, useState } from "react"

import { Form, Team, Input, Button, Separator, Label } from "./styles"

import { Context } from "../../context"

export default function FormScore({onSubmit}) {
	const [homeScore, setHomeScore] = useState(0)
	const [homeName, setHomeName] = useState("")
	const [awayScore, setAwayScore] = useState(0)
	const [awayName, setAwayName] = useState("")

	const { state, setState } = useContext(Context)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (homeName.length > 0 && awayName.length > 0) {
			const newScore = {
				home: {
					value: +homeScore,
					name: homeName,
				},
				away: {
					value: +awayScore,
					name: awayName,
				}
			}
            const newState = [...state]
            newState.push(newScore)
            setState(newState)
			onSubmit()
		} else {
			alert("Home team and/or Away team must be filled")
		}
	}

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Team>
				<Label>Home team</Label>
				<Input
                    placeholder="Team name"
					value={homeName}
					onChange={(e) => setHomeName(e.target.value)}
				/>
			</Team>
			<Team>
				<Label>Score</Label>
				<Input
					value={homeScore}
					onChange={(e) => setHomeScore(e.target.value)}
				/>
			</Team>
			<Separator />
			<Team>
				<Label>Score</Label>
				<Input
					value={awayScore}
					onChange={(e) => setAwayScore(e.target.value)}
				/>
			</Team>
			<Team>
				<Label>Away team</Label>
				<Input
                    placeholder="Team name"
					value={awayName}
					onChange={(e) => setAwayName(e.target.value)}
				/>
			</Team>
			<Button>Save</Button>
		</Form>
	)
}
