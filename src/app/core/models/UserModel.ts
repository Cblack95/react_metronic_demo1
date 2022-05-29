import {ID} from '../../../_metronic/helpers'

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

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  first_name: '',
  last_name: '',
  email: '',
}
