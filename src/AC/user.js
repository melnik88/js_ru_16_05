import { SIGN_IN } from '../constants'
import AppDispatcher from '../dispatcher'

export function signIn(name) {
	let action = {
		type: SIGN_IN,
		payload: {name}
	}
	AppDispatcher.dispatch(action)
}