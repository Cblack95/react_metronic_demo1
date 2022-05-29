import {
  FC,
  useState,
  useEffect,
  // useRef,
  createContext,
  useContext,
} from 'react'
import {useAuth} from './../../../../../app/modules/auth/core/Auth'
// import {usePersonalDataForm} from './../../../../../app/core/basicData/PersonalDataResponseProvider'
import {ICreateModel,inits} from './CreateModelHelper'
import * as FormHelper from './StorageHelpers'


type FormDataContextProps = {
  formData: ICreateModel| undefined
  saveFormData: (formData: ICreateModel | undefined) => void
  updateFormData: (updates: Partial<ICreateModel>) => void
  removeFormData: () => void
}

const initFormDataContextPropsState = {
  formData: FormHelper.getFormData(),
  saveFormData: () => {},
  updateFormData: () => {},
  removeFormData: () => {}
}

const FormDataContext = createContext<FormDataContextProps>(initFormDataContextPropsState)

const useFormData = () => useContext(FormDataContext)

const FormDataProvider: FC = ({children}) => {
  const {auth} = useAuth()
  const [formData, setFormData] = useState<ICreateModel| undefined>(FormHelper.getFormData())
  const updateFormData = (updates: Partial<ICreateModel>) => {
    const updatedFormData = Object.assign(formData, updates)
    setFormData(updatedFormData)
  }

  const saveFormData = (formdata: ICreateModel | undefined) => {
    setFormData(formdata)
    if (formdata) {
      FormHelper.setFormData(formdata)
    } else {
      FormHelper.removeFormData()
    }
  }

  const removeFormData= ()=>{
    FormHelper.removeFormData()
  }

  useEffect(() => {
    if (!auth) {
      removeFormData()
    }
    // eslint-disable-next-line
  }, [auth])

  return (
    <FormDataContext.Provider value={{formData, updateFormData,saveFormData,removeFormData}}>
      {children}
    </FormDataContext.Provider>
  )
}

// const FormDataInit: FC = ({children}) => {
//   const {currentUser} = useAuth()
//   const {formData,saveFormData,removeFormData}= useFormData()
//   // const didRequest = useRef(false)
//   // const [showSplashScreen, setShowSplashScreen] = useState(true)

//   useEffect(() => {
//     if (currentUser){
//       saveFormData(formData)
//     }else{
//       removeFormData()
//     }
//     // eslint-disable-next-line
//   }, [])

//   return <>{children}</>
// }

export {FormDataProvider, useFormData}