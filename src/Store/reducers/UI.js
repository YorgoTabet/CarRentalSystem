import { toggleTracks } from "../actions/actionTypes"

const initialState = {
    toggleTracks: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case toggleTracks:
            return {
                ...state,
                toggleTracks: !state.toggleTracks
            }

        default:
            return state
    }
}
export default reducer