/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Force,Rating,Assessment} from '../../../../../../app/core/basicData/_models'
// import {getFormData, setFormData, removeFormData, FORM_DATA_LOCAL_STORAGE_KEY} from '../StorageHelpers'

type Props = {
  force: Force
  Criterias: Array<Rating>
  Evals: Array<Assessment>
}

const Step: FC<Props> = ({force,Criterias,Evals}) => {
  const Items = force.criterion


  return (
    <div className='w-100 '>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          {force.title}
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          {'If you need more info on this section, please check out '}
          <a href='/dashboard' className='link-primary fw-bolder'>
            {'Documentation '}
          </a>
          .
        </div>
      </div>

      {
        Items?.map((item :any,indexitem:number)=>(
          <div key={indexitem} className='fv-row'>
            <div className='row rounded border-gray-300 border-1 border-gray-300 border-dashed px-7 py-1 mb-6'>

                <label className='form-label required'>
                  <strong>
                      {item.question} ?
                  </strong>
                </label>

                <div className='col-lg-6'>
                  <div className="input-group flex-nowrap" >
                    <span className="input-group-text">
                      <i className="bi bi-exclamation-square-fill fs-4"></i>
                    </span>
                    <div className="overflow-hidden flex-grow-1">
                      <Field
                        as='select'
                        name={`${item.modelName}_criteria`}
                        className='form-select rounded-start-0'
                        data-control="select2"
                        // onBlur={setFormData()}
                      >
                        <option></option>
                        {
                          Criterias.map((criteria :any,indexcrit:number)=>(
                            <option key={criteria.id} value={criteria.id}>{criteria.name}</option>
                        ))}

                      </Field>
                    </div>
                    <div className='text-danger mt-2'>
                      <ErrorMessage name={`${item.modelName}_criteria`} />
                    </div>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className="input-group flex-nowrap" >
                    <span className="input-group-text">
                      <i className="bi bi-emoji-neutral text-primary fs-4"></i>
                    </span>
                    <div className="overflow-hidden flex-grow-1">
                      <Field
                        as='select'
                        name={`${item.modelName}_evaluation`}
                        className='form-select rounded-start-0'
                        data-control="select2"
                      >
                        <option></option>
                        {
                          Evals.map((evaluation :any,indexeval:number)=>(
                            <option key={evaluation.id} value={evaluation.id}>{evaluation.name}</option>
                        ))}
                      </Field>
                    </div>
                    <div className='text-danger mt-2'>
                      <ErrorMessage name={`${item.modelName}_evaluation`} />
                    </div>
                  </div>
                </div>




            </div>
          </div>
        ))}


    </div>
  )
}

export {Step}
