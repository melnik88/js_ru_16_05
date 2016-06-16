import { INCREMENT } from '../constants'

export function reducer(count, action) {
    const { type, payload } = action;
    return type == INCREMENT ? count + payload.value : count
}