import styled from "styled-components"

export const Form = styled.form`
	display: flex;
	align-items: flex-end;
`
export const Team = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5em;
`

export const Input = styled.input`
	width: 80px;
	appearance: none;
	border-radius: 5px;
	border: 2px solid #bf665e;
	margin-top: 0.25em;
    padding: 0.25em 1em;
`

export const Button = styled.button`
	border: none;
    border-radius: 2em;
    color: #bf665e;
    font-weight: bold;
	background-color: transparent;
    display: inline-block;
    padding: 0.25em 1em;
    cursor: pointer;
    font-size: 1em;
	border: 2px solid #bf665e;
	margin-bottom: 0.5em;
	transition: all .3s ease;
	&:hover{
		color: white;
		background-color: #bf665e;
	}
`

export const Separator = styled.div`
	width: 2px;
	height: 2em;
	margin-bottom: 0.5em;
	background-color: #bf665e;
	position: relative;
	margin: 0 1em;
	&:before{
		content: 'VS';
		position: absolute;
		top: -1.5em;
		left: -0.5em;
		color: #bf665e;
		font-weight: bold;
	}
`

export const Label = styled.label`
	text-align: center;
`