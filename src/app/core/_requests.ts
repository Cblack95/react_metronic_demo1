import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../_metronic/core_helpers'
import {Model, QueryResponse,BasicQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_BACKEND_API_URL

const model_url = (model: string)=>{
  return `${API_URL}/${model}`
}
const get_models_url = (models: string)=>{
  return `${API_URL}/${models}`
}

const getAllModelItems = (model_name:string): Promise<BasicQueryResponse> => {
  return axios
    .get(`${get_models_url(model_name)}`)
    .then((response: AxiosResponse<BasicQueryResponse>) => response.data)
}

const getModelsWithQuery = (query: string,model_name:string): Promise<QueryResponse> => {
  return axios
    .get(`${get_models_url(model_name)}?${query}`)
    .then((response: AxiosResponse<QueryResponse>) => response.data)
}

const getModelById = (id: ID,model_name:string): Promise<Model | undefined> => {
  return axios
    .get(`${model_url(model_name)}/${id}`)
    .then((response: AxiosResponse<Response<Model>>) => response.data)
    .then((response: Response<Model>) => response.data)
}

const createModel = (model_name:string,model: Model): Promise<Model | undefined> => {
  return axios
    .put(model_url(model_name), model)
    .then((response: AxiosResponse<Response<Model>>) => response.data)
    .then((response: Response<Model>) => response.data)
}

const updateModel = (model_name:string,model: Model): Promise<Model | undefined> => {
  return axios
    .post(`${model_url(model_name)}/${model.id}`, model)
    .then((response: AxiosResponse<Response<Model>>) => response.data)
    .then((response: Response<Model>) => response.data)
}

const deleteModel = (model_name:string,modelId: ID): Promise<void> => {
  return axios.delete(`${model_url(model_name)}/${modelId}`).then(() => {})
}

const deleteSelectedModels = (model_name:string,modelIds: Array<ID>): Promise<void> => {
  const requests = modelIds.map((id) => axios.delete(`${model_url(model_name)}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getAllModelItems, getModelsWithQuery, deleteModel, deleteSelectedModels, getModelById, createModel, updateModel}
