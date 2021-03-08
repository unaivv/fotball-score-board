import { useContext } from "react"

import { Context } from "../../context"

const RenderScore = ({ matches }) => {
	return (
		<ul>
			{matches.length > 0
				? matches.map((match, index) => {
						return (
							<li key={index}>{`${match.home.name} ${match.home.value} - ${match.away.value} ${match.away.name}`}</li>
						)
				  })
				: "Empty..."}
		</ul>
	)
}

export default function ScoreBoard() {
	const { state } = useContext(Context)
	return (
		<>
			<h2>Score Board</h2>
			<RenderScore matches={state} />
		</>
	)
}
