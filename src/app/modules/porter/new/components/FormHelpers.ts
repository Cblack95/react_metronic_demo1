import {ICreateModel} from './CreateModelHelper'
// import * as FormModel from ''
const FORM_DATA_LOCAL_STORAGE_KEY="efdsdz"

const getFormData = (): ICreateModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(FORM_DATA_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const formData: ICreateModel = JSON.parse(lsValue) as ICreateModel
    if (formData) {
      return formData
    }
  } catch (error) {
    console.error('FORM DATA LOCAL STORAGE PARSE ERROR', error)
  }
}

const setFormData = (formData: ICreateModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(formData)
    localStorage.setItem(FORM_DATA_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('FORM DATA LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeFormData = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(FORM_DATA_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('FORM DATA LOCAL STORAGE REMOVE ERROR', error)
  }
}

export {getFormData, setFormData, removeFormData, FORM_DATA_LOCAL_STORAGE_KEY}
