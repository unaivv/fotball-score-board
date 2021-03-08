import StartGame from "./components/StartGame"
import ScoreBoard from "./components/ScoreBoard"

import Context from "./context"

function App() {
	const initialValue = [
		{
			home: {
				value: 0,
				name: "Mexico",
			},
			away: {
				value: 5,
				name: "Canada",
			},
		},
		{
			home: {
				value: 10,
				name: "Spain",
			},
			away: {
				value: 2,
				name: "Brazil",
			},
		},
		{
			home: {
				value: 2,
				name: "Germany",
			},
			away: {
				value: 2,
				name: "France",
			},
		},
		{
			home: {
				value: 6,
				name: "Uruguay",
			},
			away: {
				value: 6,
				name: "Italy",
			},
		},
		{
			home: {
				value: 3,
				name: "Argentina",
			},
			away: {
				value: 1,
				name: "Australia",
			},
		},
	]
	return (
		<div className="App">
			<Context.Provider initialState={initialValue}>
				<StartGame />
				<ScoreBoard />
			</Context.Provider>
		</div>
	)
}

export default App
