import {
  FC,
  useState,
  createContext,
  useContext,
} from 'react'
import {useAuth} from '../../../auth/core/Auth'
import {ICreateModel,inits} from './CreateModelHelper'

type FormContextProps = {
  data: ICreateModel | undefined
  saveData: (data: ICreateModel | undefined) => void
}

const initDataContextPropsState = {
  data: inits,
  saveData: () => {}
}

const DataContext = createContext<FormContextProps>(initDataContextPropsState)

const useData = () => {
  return useContext(DataContext)
}

const FormProvider: FC = ({children}) => {
  const [data, setData] = useState<ICreateModel | undefined>(inits)
  const {currentUser}=useAuth()
  const saveData = (data: ICreateModel | undefined) => {
    setData(data)
  }

  return (
    <DataContext.Provider value={{data, saveData}}>
      {children}
    </DataContext.Provider>
  )
}

export {FormProvider, useData}