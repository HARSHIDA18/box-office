import {useReducer} from 'react'
import { initialize } from 'workbox-google-analytics'

function usePersistedReducer(reducer,initialize){
    const[state.dispatch]=useReducer(reducer,initialize)
}