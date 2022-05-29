/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext} from 'react'
import {useQuery} from 'react-query'
import {
  createBasicResponseContext,
  initialBasicQueryResponse,
  QUERIES
} from '../../../_metronic/core_helpers'
import { getAllModelItems} from '../_requests'
import {Assessment} from '../_models'

const modelName:string='evaluations'

const AssessmentQueryResponseContext = createBasicResponseContext<Assessment>(initialBasicQueryResponse)
const AssessmentQueryResponseProvider: FC = ({children}) => {

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
    <AssessmentQueryResponseContext.Provider value={{isLoading: isFetching, refetch, response}}>
      {children}
    </AssessmentQueryResponseContext.Provider>
  )
}

const useAssessmentQueryResponse = () => useContext(AssessmentQueryResponseContext)

const useAssessmentQueryResponseData = () => {
  const {response} = useAssessmentQueryResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const useAssessmentQueryResponseLoading = (): boolean => {
  const {isLoading} = useAssessmentQueryResponse()
  return isLoading
}

export {
  AssessmentQueryResponseProvider,
  useAssessmentQueryResponse,
  useAssessmentQueryResponseData,
  useAssessmentQueryResponseLoading,
}
