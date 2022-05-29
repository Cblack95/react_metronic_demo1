/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext} from 'react'
import {useQuery} from 'react-query'
import {
  createBasicResponseContext,
  initialBasicQueryResponse,
  QUERIES
} from '../../../_metronic/core_helpers'
import { getAllModelItems} from '../_requests'
import {Rating} from '../_models'

const modelName:string='sensitivities'

const RatingQueryResponseContext = createBasicResponseContext<Rating>(initialBasicQueryResponse)
const RatingQueryResponseProvider: FC = ({children}) => {

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
    <RatingQueryResponseContext.Provider value={{isLoading: isFetching, refetch, response}}>
      {children}
    </RatingQueryResponseContext.Provider>
  )
}

const useRatingQueryResponse = () => useContext(RatingQueryResponseContext)

const useRatingQueryResponseData = () => {
  const {response} = useRatingQueryResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const useRatingQueryResponseLoading = (): boolean => {
  const {isLoading} = useRatingQueryResponse()
  return isLoading
}

export {
  RatingQueryResponseProvider,
  useRatingQueryResponse,
  useRatingQueryResponseData,
  useRatingQueryResponseLoading,
}
