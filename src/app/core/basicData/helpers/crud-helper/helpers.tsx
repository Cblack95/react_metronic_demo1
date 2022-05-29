import {createContext} from 'react'
import { QueryResponseContextProps} from './models'

function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
  return createContext(initialState)
}

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== ''
}




export {
  createResponseContext,
  isNotEmpty,
}
