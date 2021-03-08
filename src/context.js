import { createContext, useState } from "react"

export const Context = createContext()

const Provider = ({ initialState, children }) => {
	const [state, setState] = useState(initialState)
	const value = {
        state,
        setState
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { Provider, Consumer: Context.Consumer }
