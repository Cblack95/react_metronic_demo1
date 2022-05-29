/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  QUERIES
} from '../../../app/core/basicData/helpers'
import { getBasicData} from './_requests'
import {Data} from './_models'


const DataResponseContext = createResponseContext<Data>(initialQueryResponse)
const DataResponseProvider: FC = ({children}) => {

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.LIST}-Basic-Data`,
    () => {
      return getBasicData()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <DataResponseContext.Provider value={{isLoading: isFetching, refetch, response}}>
      {children}
    </DataResponseContext.Provider>
  )
}

const useDataResponse = () => useContext(DataResponseContext)

const useData = () => {
  const {response} = useDataResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const useDataForces = () => {

  const {response} = useDataResponse()
  if (!response || !response.data || !response.data.forces) {
    return []
  }

  return response.data.forces
}

const useDataRatings = () => {

  const {response} = useDataResponse()
  if (!response || !response.data || !response.data.ratings) {
    return []
  }

  return response.data.ratings
}

const useDataAssessments = () => {

  const {response} = useDataResponse()
  if (!response || !response.data || !response.data.assessments) {
    return []
  }

  return response.data.assessments
}

const useResponseLoading = (): boolean => {
  const {isLoading} = useDataResponse()
  return isLoading
}

export {
  DataResponseProvider,
  useDataResponse,
  useData,
  useDataForces,
  useDataAssessments,
  useDataRatings,
  useResponseLoading,
}
