import React, {FC, useEffect, useRef, useState} from 'react'
import axios from "axios";
import {Step0} from './steps/Step0'
import {Step} from './steps/Step'
import {Step5} from './steps/Step5'
import {KTSVG} from '../../../../../_metronic/helpers'
import {useDataForces,useDataAssessments,useDataRatings} from './../../../../../app/core/basicData/DataResponseProvider'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createModelSchemas, ICreateModel, inits} from './CreateModelHelper'

const API_URL=process.env.REACT_APP_BACKEND_API_URL

const Horizontal: FC = () => {

  const [stepData, setStepData] = useState([]);

  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createModelSchemas[0])
  const [initValues] = useState<ICreateModel>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const Criterias = useDataRatings()
  const Evals = useDataAssessments()
  const forces = useDataForces()

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(createModelSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateModel, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createModelSchemas[stepper.current.currentStepIndex-1])

    if (stepper.current.currentStepIndex < stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])



  return (
    <div className='card'>
      <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_model_stepper_h'
        >
          <div className='stepper-nav mb-5'>
            <div key={'H10'} className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Model Details</h3>
            </div>

            <div key={'H11'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Competitors</h3>
            </div>

            <div key={'H12'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Customers</h3>
            </div>

            <div key={'H13'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Providers</h3>
            </div>

            <div key={'H14'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>New entrants</h3>
            </div>

            <div key={'H15'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Substitute products</h3>
            </div>

            <div key={'H16'} className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Completed</h3>
            </div>
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_model_form_h'>
                <div className='current' data-kt-stepper-element='content'>
                  <Step0 />
                </div>

                {
                  forces.map((force :any,indexstep:number)=>(
                    <div key={force.id} data-kt-stepper-element="content">
                      <Step force={force} Criterias={Criterias} Evals={Evals} />
                    </div>
                  ))
                }

                <div data-kt-stepper-element='content'>
                  <Step5 />
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continue' }
                        {isSubmitButton && 'Submit'}
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export {Horizontal}
