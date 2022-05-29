import axios, {AxiosResponse} from 'axios'
import { ID } from '../../../_metronic/core_helpers'
import {QueryResponse,PersonalDataResponse} from './_models'

const API_URL = process.env.REACT_APP_BACKEND_API_URL

const BASIC_DATA_PATH = 'basic_data'
const PERSONAL_DATA_PATH = 'personal_data'

const getBasicData = (): Promise<QueryResponse> => {
  return axios
    .get(`${API_URL}/${BASIC_DATA_PATH}`)
    .then((response: AxiosResponse<QueryResponse>) => response.data)
}

const getPersonalData = (auth_id:ID): Promise<PersonalDataResponse> => {
  return axios
    .get(`${API_URL}/${PERSONAL_DATA_PATH}/${auth_id}`)
    .then((response: AxiosResponse<PersonalDataResponse>) => response.data)
}

export {getBasicData, getPersonalData}
