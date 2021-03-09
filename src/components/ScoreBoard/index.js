import { useContext } from "react"

import { Context } from "../../context"

const RenderScore = ({ matches }) => {
	return (
		<ul>
			{matches.length > 0
				? sortMaatches(matches).map((match, index) => {
						return (
							<li
								key={index}
							>{`${match.home.name} ${match.home.value} - ${match.away.value} ${match.away.name}`}</li>
						)
				  })
				: "Empty..."}
		</ul>
	)
}

const sortMaatches = (matches) => {
	function compare(a, b) {
		const totalGoalsA = a.home.value + a.away.value;
		const totalGoalsB = b.home.value + b.away.value;
		if (totalGoalsA > totalGoalsB) {
			return -1
		}else if(a.last_nom < b.last_nom) {
			return 1
		}
		return 0
	}

	return matches.sort(compare)
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
