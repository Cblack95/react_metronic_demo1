/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext} from 'react'
import {useQuery} from 'react-query'
import {
  createBasicResponseContext,
  initialBasicQueryResponse,
  QUERIES
} from '../../../_metronic/core_helpers'
import { getAllModelItems} from '../_requests'
import {Force} from '../_models'

const modelName:string='forces'

const ForceQueryResponseContext = createBasicResponseContext<Force>(initialBasicQueryResponse)
const ForceQueryResponseProvider: FC = ({children}) => {

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.LIST}-${modelName}`,
    () => {
      return getAllModelItems(modelName)
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <ForceQueryResponseContext.Provider value={{isLoading: isFetching, refetch, response}}>
      {children}
    </ForceQueryResponseContext.Provider>
  )
}

const useForceQueryResponse = () => useContext(ForceQueryResponseContext)

const useForceQueryResponseData = () => {
  const {response} = useForceQueryResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const useForceQueryResponseLoading = (): boolean => {
  const {isLoading} = useForceQueryResponse()
  return isLoading
}

export {
  ForceQueryResponseProvider,
  useForceQueryResponse,
  useForceQueryResponseData,
  useForceQueryResponseLoading,
}
