
export type ID = undefined | null | number

export type Response<T> = {
  data?: T
}

export type QueryResponseContextProps<T> = {
  response?: Response<T> | undefined
  refetch: () => void
  isLoading: boolean
}

export const initialQueryResponse = {refetch: () => {}, isLoading: false}