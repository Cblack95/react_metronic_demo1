import { ICreateModel } from '../../modules/porter/new/components/CreateModelHelper'
import { Modelization } from '../_models'
import {ID, Response} from './../../../app/core/basicData/helpers'

export type Force = {
  id?: ID
  modelName?: string
  name?: string
  title?: string
  font_awesome_icon?: string
  color?: string
  criterion?: Array<Criteria>
  tips?: Array<Tip>
}

export type Assessment = {
  id?: ID
  name?: string
  coefficient?: string
  color?: string
}

export type Rating = {
  id?: ID
  name?: string
  coefficient?: string
  color?: string
  emoji?: string
}

export type Criteria = {
  id?: ID
  force_id?: ID
  model_name?: string
  name?: string
  label?: string
  description?: string
}

export type Tip = {
  id?: ID
  criteria_id?: ID
  weight?: number
  label?: string
}

export type Input = {
  id?: ID
  modelization_id?: ID
  force_item_id?: ID
  evaluation_id?: ID
  sensitivity_id?: ID
  created_at?: string
  updated_at?: string
}

export type Output = {
  id?: ID
  input_id?: ID
  value?: number
  created_at?: string
  updated_at?: string
}

export type Data = {
  forces?: Array<Force>
  ratings?: Array<Rating>
  assessments?: Array<Assessment>
}

export type PersonalData = {
  models?: Array<Modelization>
  latest_model?: Modelization
  form_data?: ICreateModel
}

export type QueryResponse = Response<Data>

export type PersonalDataResponse = Response<PersonalData>



// export const initialUser: Model = {
//   avatar: 'avatars/300-6.jpg',
//   position: 'Art Director',
//   role: 'Administrator',
//   first_name: '',
//   last_name: '',
//   email: '',
// }
