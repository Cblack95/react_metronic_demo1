/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, useState} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  QUERIES
} from './helpers'
import {useAuth} from '../../../app/modules/auth/core/Auth'
import { getPersonalData} from './_requests'
import {PersonalData} from './_models'

const PersonalDataContext = createResponseContext<PersonalData>(initialQueryResponse)
const PersonalDataProvider: FC = ({children}) => {
  const {currentUser} = useAuth()
  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.LIST}-Personal-Data-${currentUser?.id}`,
    () => {
      return getPersonalData(currentUser?.id)
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <PersonalDataContext.Provider value={{isLoading: isFetching, refetch, response}}>
      {children}
    </PersonalDataContext.Provider>
  )
}

const usePersonalDataResponse = () => useContext(PersonalDataContext)

const usePersonalData = () => {
  const {response} = usePersonalDataResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const usePersonalDataModels = () => {
  const {response} = usePersonalDataResponse()
  if (!response || !response.data || !response.data.models) {
    return []
  }

  return response?.data.models || []
}

const usePersonalDataForm = () => {

  const {response} = usePersonalDataResponse()
  if (!response || !response.data || !response.data.form_data) {
    return []
  }

  return response?.data.form_data || []
}



const useResponseLoading = (): boolean => {
  const {isLoading} = usePersonalDataResponse()
  return isLoading
}

export {
  PersonalDataProvider,
  usePersonalDataResponse,
  usePersonalData,
  usePersonalDataModels,
  usePersonalDataForm,
  useResponseLoading,
}
