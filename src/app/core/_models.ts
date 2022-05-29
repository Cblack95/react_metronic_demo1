import {ID, Response,BasicResponse} from '../../_metronic/core_helpers'

export type User = {
  id?: ID
  first_name?: string
  last_name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type Modelization = {
  id?: ID
  user_id?: ID
  model_name?: string
  reference?: string
  business_name?: string
  model_descriptor?: string
  updated_at?: string
  created_at?: string
}

export type Force = {
  id?: ID
  modelName?: string
  name?: string
  title?: string
  font_awesome_icon?: string
  color?: string
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

export type Advice = {
  id?: ID
  criteria_id?: ID
  weight?: number
  label?: string
}

export type Input = {
  id?:ID
  modelization_id?: ID
  criteria_id?: ID
  assessment_id?: ID
  rating_id?: ID
  updated_at?: string
  created_at?: string
}

export type Output = {
  id?: ID
  input_id?: ID
  value?: number
  label?: string
  updated_at?: string
  created_at?: string
}

export type Model=User |Force |Criteria |Assessment |Rating |Advice |Input |Output

export type QueryResponse = Response<Array<Model>>

export type BasicQueryResponse = BasicResponse<Array<Model>>

export const initialUser: Model = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  first_name: '',
  last_name: '',
  email: '',
}
