/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step0: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Model Details
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected model type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Model Name</label>

        <Field
          name='modelName'
          className='form-control form-control-lg form-control-solid'
          />
        <div className='text-danger mt-2'>
          <ErrorMessage name='modelName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>business Name</label>

        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Model Description</label>

        <Field
          as='textarea'
          name='modelDescription'
          className='form-control form-control-lg form-control-solid'
          rows={3}
        ></Field>
      </div>


    </div>
  )
}

export {Step0}
